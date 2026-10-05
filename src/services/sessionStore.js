const { randomBytes } = require('node:crypto');

class SessionStore {
  #sesiones = new Map();
  #ahora;
  #duracionMs;

  constructor({ ahora = Date.now, duracionMs = 8 * 60 * 60 * 1000 } = {}) {
    this.#ahora = ahora;
    this.#duracionMs = duracionMs;
  }

  crear(usuario) {
    const token = randomBytes(32).toString('hex');
    const ahora = this.#ahora();
    for (const [clave, sesion] of this.#sesiones) {
      if (sesion.vence <= ahora) this.#sesiones.delete(clave);
    }
    this.#sesiones.set(token, {
      usuario: { id: usuario.id, nombre: usuario.nombre, perfil: usuario.perfil },
      vence: ahora + this.#duracionMs
    });
    return token;
  }

  obtener(token) {
    const sesion = this.#sesiones.get(token);
    if (!sesion) return undefined;
    if (sesion.vence <= this.#ahora()) {
      this.#sesiones.delete(token);
      return undefined;
    }
    return { ...sesion.usuario };
  }

  eliminar(token) {
    if (token) this.#sesiones.delete(token);
  }
}

module.exports = SessionStore;
