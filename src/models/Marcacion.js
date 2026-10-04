const ACCIONES = ['entrada', 'salida'];

class Marcacion {
  #usuarioIdentificador;
  #accion;
  #fechaHora;

  constructor({ usuarioIdentificador, accion, fechaHora = new Date() }) {
    const textoValido = typeof usuarioIdentificador === 'string' && usuarioIdentificador.trim();
    const numeroValido = Number.isInteger(usuarioIdentificador) && usuarioIdentificador > 0;
    if (!textoValido && !numeroValido) {
      throw new Error('El identificador del usuario es obligatorio');
    }

    if (!ACCIONES.includes(accion)) {
      throw new Error('La acción debe ser entrada o salida');
    }

    if (!(fechaHora instanceof Date) && !['string', 'number'].includes(typeof fechaHora)) {
      throw new Error('La fecha y hora deben ser válidas');
    }
    const fechaNormalizada = new Date(fechaHora);
    if (Number.isNaN(fechaNormalizada.getTime())) {
      throw new Error('La fecha y hora deben ser válidas');
    }

    this.#usuarioIdentificador = textoValido ? usuarioIdentificador.trim() : usuarioIdentificador;
    this.#accion = accion;
    this.#fechaHora = fechaNormalizada;
  }

  get usuarioIdentificador() { return this.#usuarioIdentificador; }
  get accion() { return this.#accion; }
  get fechaHora() { return new Date(this.#fechaHora.getTime()); }
}

module.exports = Marcacion;
