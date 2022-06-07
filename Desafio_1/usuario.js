//Alumno: González Oviedo, Tomás.
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.apellido}, ${this.nombre}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    const libro = {
      nombre,
      autor,
    };

    this.libros.push(libro);
  }

  getBookNames() {
    return this.libros.map(({ nombre }) => nombre);
  }
}

const usuario = new Usuario(`Tomás`, `González Oviedo`, [], []);
console.log(usuario.getFullName());
usuario.addMascota(`Volt`);
console.log(usuario.countMascotas());
usuario.addBook(`Animal Farm`, `George Orwell`);
console.log(usuario.getBookNames());
