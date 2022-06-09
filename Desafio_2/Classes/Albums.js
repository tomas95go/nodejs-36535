class Album {
  constructor(id, nombre, precio, img, artist, release_year) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.artist = artist;
    this.release_year = release_year;
  }
}

module.exports = {
  Album,
};
