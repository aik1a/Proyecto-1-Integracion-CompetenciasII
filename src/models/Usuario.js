const PERFILES = ['administrador', 'empleado'];
const ESTADOS = ['Activo', 'Inactivo'];

function validarCorreo(correo) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    throw new Error('El correo no tiene un formato válido');
  }
}

class Usuario {
  #identificador;
  #nombre;
  #correo;
  #perfil;
  #estado;

  constructor({ identificador, nombre, correo, perfil, estado = 'Activo' }) {
    if ([identificador, nombre, correo].some(valor => typeof valor !== 'string' || !valor.trim())) {
      throw new Error('Identificador, nombre y correo son obligatorios');
    }
    identificador = identificador.trim(); nombre = nombre.trim(); correo = correo.trim().toLowerCase();
    if ([...identificador].length > 30 || [...nombre].length > 120 || [...correo].length > 254) {
      throw new Error('Máximos: identificador 30, nombre 120 y correo 254 caracteres');
    }
    validarCorreo(correo);

    if (!PERFILES.includes(perfil)) {
      throw new Error('El perfil debe ser administrador o empleado');
    }

    if (!ESTADOS.includes(estado)) {
      throw new Error('El estado debe ser Activo o Inactivo');
    }

    this.#identificador = identificador;
    this.#nombre = nombre;
    this.#correo = correo;
    this.#perfil = perfil;
    this.#estado = estado;
  }

  get identificador() { return this.#identificador; }
  get nombre() { return this.#nombre; }
  get correo() { return this.#correo; }
  get perfil() { return this.#perfil; }
  get estado() { return this.#estado; }

  estaActivo() {
    return this.#estado === 'Activo';
  }
}

module.exports = Usuario;
module.exports.validarCorreo = validarCorreo;
