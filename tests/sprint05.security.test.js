const test = require('node:test');
const assert = require('node:assert/strict');
const SessionStore = require('../src/services/sessionStore');
const { crearApp } = require('../src/app');
const { UsuarioService, validarId } = require('../src/services/usuarioService');
const pages = require('../src/views/pages');

async function preparar(t, { sesiones = new SessionStore() } = {}) {
  const estado = { usuario: { id: 1, identificador: 'ADM-1', nombre: 'Admin',
    correo: 'admin@example.test', perfil: 'administrador', estado: 'Activo' }, consultas: [] };
  const pool = { execute: async (sql, params) => {
    estado.consultas.push([sql, params]);
    if (sql.startsWith('UPDATE usuarios SET estado')) {
      estado.usuario.estado = 'Inactivo'; return [{ affectedRows: 1 }];
    }
    return [estado.usuario ? [{ ...estado.usuario }] : []];
  } };
  const token = sesiones.crear(estado.usuario);
  const servidor = crearApp({ pool, sesiones }).listen(0, '127.0.0.1');
  await new Promise(resolve => servidor.once('listening', resolve));
  t.after(() => new Promise(resolve => servidor.close(resolve)));
  const base = `http://127.0.0.1:${servidor.address().port}`;
  const solicitar = (ruta, opciones = {}) => fetch(base + ruta, { redirect: 'manual', ...opciones,
    headers: { cookie: `sesion=${token}`, 'content-type': 'application/x-www-form-urlencoded' } });
  return { estado, sesiones, token, solicitar, base };
}

test('COR-01 store vence exactamente a ocho horas y logout elimina el token', () => {
  let ahora = 0;
  const sesiones = new SessionStore({ ahora: () => ahora });
  const token = sesiones.crear({ id: 1, nombre: 'Ana', perfil: 'empleado' });
  assert.match(token, /^[a-f0-9]{64}$/);
  ahora = 8 * 60 * 60 * 1000 - 1; assert.equal(sesiones.obtener(token).id, 1);
  ahora++; assert.equal(sesiones.obtener(token), undefined);
  const otro = sesiones.crear({ id: 2, nombre: 'Luis', perfil: 'empleado' });
  sesiones.eliminar(otro); assert.equal(sesiones.obtener(otro), undefined);
});

test('COR-02 store no expone referencia mutable ni Map interno', () => {
  const sesiones = new SessionStore();
  const usuario = { id: 1, nombre: 'Ana', perfil: 'empleado' };
  const token = sesiones.crear(usuario);
  usuario.perfil = 'administrador'; sesiones.obtener(token).perfil = 'administrador';
  assert.equal(sesiones.obtener(token).perfil, 'empleado');
  assert.equal(sesiones.sesiones, undefined);
});

test('COR-03 la cookie existente pierde acceso tras desactivar por HTTP', async t => {
  const { solicitar, sesiones, token } = await preparar(t);
  assert.equal((await solicitar('/usuarios')).status, 200);
  assert.equal((await solicitar('/usuarios/1/desactivar', { method: 'POST' })).status, 302);
  const respuesta = await solicitar('/usuarios');
  assert.equal(respuesta.status, 302); assert.equal(respuesta.headers.get('location'), '/login');
  assert.equal(sesiones.obtener(token), undefined);
});

test('COR-04 permisos se revalidan tras cambiar perfil y al eliminar usuario', async t => {
  const { solicitar, estado, sesiones, token } = await preparar(t);
  estado.usuario.perfil = 'empleado';
  assert.equal((await solicitar('/usuarios')).status, 403);
  estado.usuario = null;
  assert.equal((await solicitar('/usuarios')).headers.get('location'), '/login');
  assert.equal(sesiones.obtener(token), undefined);
});

test('COR-05 cookie caducada y cookie cerrada no permiten acceso HTTP', async t => {
  let ahora = 0;
  const sesiones = new SessionStore({ ahora: () => ahora });
  const { solicitar, estado, base } = await preparar(t, { sesiones });
  assert.equal((await solicitar('/logout', { method: 'POST' })).headers.get('location'), '/login');
  assert.equal((await solicitar('/usuarios')).headers.get('location'), '/login');
  const token = sesiones.crear(estado.usuario);
  ahora = 8 * 60 * 60 * 1000;
  const respuesta = await fetch(base + '/usuarios', {
    redirect: 'manual', headers: { cookie: `sesion=${token}` }
  });
  assert.equal(respuesta.headers.get('location'), '/login');
  assert.equal(sesiones.obtener(token), undefined);
});

test('COR-06 ID inválido se rechaza antes de la consulta de usuario', async () => {
  let consultas = 0;
  const usuarios = new UsuarioService({ execute: async () => { consultas++; return [[]]; } });
  for (const id of ['0', '-1', '1abc', '1.5', ' 1', '4294967296', '1"><img>']) {
    assert.throws(() => validarId(id), /entero positivo/);
    await assert.rejects(usuarios.eliminar(id), /entero positivo/);
  }
  assert.equal(consultas, 0); assert.equal(validarId('42'), 42);
});

test('COR-07 ID con marcado no se refleja como HTML en POST de edición', async t => {
  const { solicitar } = await preparar(t);
  const id = '1"><img src=x onerror=alert(1)>';
  const respuesta = await solicitar('/usuarios/' + encodeURIComponent(id), { method: 'POST', body: 'nombre=Ana' });
  assert.equal(respuesta.status, 400); assert.doesNotMatch(await respuesta.text(), /<img|onerror/);
});

test('COR-08 creación con body.id arbitrario conserva formulario de creación seguro', async t => {
  const { solicitar } = await preparar(t);
  const respuesta = await solicitar('/usuarios', { method: 'POST', body: new URLSearchParams({
    id: '1"><img src=x onerror=alert(1)>', nombre: 'Ana', perfil: 'invalido'
  }) });
  const html = await respuesta.text();
  assert.equal(respuesta.status, 400); assert.match(html, /action="\/usuarios"/);
  assert.doesNotMatch(html, /<img|onerror/);
});

test('COR-09 vista codifica ID y campos aun si se invoca sin la ruta', () => {
  const html = pages.formularioUsuario({ nombre: 'Admin', perfil: 'administrador' }, {
    id: '1"><img src=x onerror=alert(1)>', nombre: '<b>Ana</b>'
  });
  assert.doesNotMatch(html, /<img|<b>Ana/); assert.match(html, /&lt;b&gt;Ana/);
  assert.match(html, /\/usuarios\/1%22%3E%3Cimg/);
});

test('COR-10 fallo de consulta de sesión no concede acceso y devuelve 500 genérico', async t => {
  const sesiones = new SessionStore(); const token = sesiones.crear({ id: 1, perfil: 'administrador' });
  const pool = { execute: async () => { throw new Error('COR_INTERNAL_SENTINEL'); } };
  const servidor = crearApp({ pool, sesiones }).listen(0, '127.0.0.1');
  await new Promise(resolve => servidor.once('listening', resolve));
  t.after(() => new Promise(resolve => servidor.close(resolve)));
  const respuesta = await fetch(`http://127.0.0.1:${servidor.address().port}/usuarios`, {
    headers: { cookie: `sesion=${token}` }, redirect: 'manual'
  });
  assert.equal(respuesta.status, 500); assert.doesNotMatch(await respuesta.text(), /COR_INTERNAL_SENTINEL/);
});
