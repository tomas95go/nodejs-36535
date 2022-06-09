class Album {
  constructor(id, name, price, img, artist, release_year) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.artist = artist;
    this.release_year = release_year;
  }
}

module.exports = {
  Album,
};
