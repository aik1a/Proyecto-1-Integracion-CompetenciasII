const test = require('node:test');
const assert = require('node:assert/strict');
const Usuario = require('../src/models/Usuario');
const Marcacion = require('../src/models/Marcacion');
const { AsistenciaService } = require('../src/services/asistenciaService');
const { UsuarioService, normalizarDatos } = require('../src/services/usuarioService');
const datos = { identificador: 'EMP-1', nombre: 'Ana', correo: 'ana@example.test', perfil: 'empleado' };

test('COR-11 Usuario preserva reglas después de intentar asignar campos públicos', () => {
  const usuario = new Usuario(datos);
  for (const [campo, valor] of Object.entries({ identificador: '', nombre: '', correo: 'invalido', perfil: 'superadmin', estado: 'Inactivo' })) {
    assert.equal(Reflect.set(usuario, campo, valor), false);
  }
  assert.equal(usuario.estaActivo(), true); assert.equal(usuario.perfil, 'empleado');
  assert.equal(usuario.identificador, 'EMP-1'); assert.equal(usuario.correo, 'ana@example.test');
});

test('COR-12 Usuario rechaza texto vacío, tipo incorrecto, correo y enums inválidos', () => {
  for (const cambio of [{ nombre: '  ' }, { identificador: false }, { correo: 'invalido' }, { estado: 'otro' }, { perfil: [] }]) {
    assert.throws(() => new Usuario({ ...datos, ...cambio }));
  }
  assert.throws(() => new Usuario(normalizarDatos({ ...datos, nombre: ['Ana'] })), /obligatorios/);
  const usuario = new Usuario({ ...datos, correo: ' ANA@EXAMPLE.TEST ', nombre: ' Ana ' });
  assert.equal(usuario.nombre, 'Ana'); assert.equal(usuario.correo, 'ana@example.test');
});

test('COR-13 longitudes coinciden con VARCHAR y se validan antes de SQL', async () => {
  const limites = { ...datos, identificador: 'a'.repeat(30), nombre: 'a'.repeat(120), correo: 'a'.repeat(247) + '@x.test' };
  assert.doesNotThrow(() => new Usuario(limites));
  for (const campo of ['identificador', 'nombre', 'correo']) {
    assert.throws(() => new Usuario({ ...limites, [campo]: limites[campo] + 'a' }), /Máximos/);
  }
  let consultas = 0;
  const service = new UsuarioService({ execute: async () => { consultas++; return [[]]; } });
  await assert.rejects(service.crear({ ...datos, nombre: 'a'.repeat(121), password: 'Clave1234' }), /Máximos/);
  assert.equal(consultas, 0);
});

test('COR-14 Marcacion protege acción y copia la fecha recibida y devuelta', () => {
  const fecha = new Date('2026-10-04T09:30:00-03:00');
  const marcacion = new Marcacion({ usuarioIdentificador: 42, accion: 'entrada', fechaHora: fecha });
  const esperado = fecha.getTime(); fecha.setTime(NaN); marcacion.fechaHora.setTime(NaN);
  assert.equal(Reflect.set(marcacion, 'accion', 'pausa'), false);
  assert.equal(Reflect.set(marcacion, 'usuarioIdentificador', 0), false);
  assert.equal(marcacion.accion, 'entrada'); assert.equal(marcacion.fechaHora.getTime(), esperado);
});

test('COR-15 Marcacion rechaza identidad, acción y fecha inválidas', () => {
  for (const cambio of [{ usuarioIdentificador: ' ' }, { usuarioIdentificador: 0 }, { usuarioIdentificador: {} },
    { accion: 'pausa' }, { fechaHora: null }, { fechaHora: 'invalida' }]) {
    assert.throws(() => new Marcacion({ usuarioIdentificador: 42, accion: 'entrada', ...cambio }));
  }
});

test('COR-16 registrar usa invariantes de Marcacion antes de consultar y persiste su acción', async () => {
  const consultas = [];
  const service = new AsistenciaService({ execute: async (sql, params) => {
    consultas.push([sql, params]); return sql.startsWith('INSERT') ? [{ insertId: 7 }] : [[]];
  } });
  await assert.rejects(service.registrar(0, 'entrada'), /identificador/);
  await assert.rejects(service.registrar(42, 'pausa'), /entrada o salida/);
  assert.equal(consultas.length, 0);
  assert.equal(await service.registrar(42, 'entrada'), 7);
  assert.deepEqual(consultas[1][1], [42, 'entrada']);
  assert.match(consultas[1][0], /NOW\(\)/);
});
