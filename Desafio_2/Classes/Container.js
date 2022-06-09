class Container {
  constructor(file, fs) {
    this.file = file;
    this.fs = fs;
  }

  async initialize() {
    try {
      const hasContent = await this.checkContent();
      if (!hasContent) {
        this.fs.appendFile(this.file, JSON.stringify([]));
      }
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }

  async checkContent() {
    try {
      const hasContent = await this.fs.readFile(this.file, `utf-8`);
      return hasContent;
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }
  async save(album) {
    const { id } = album;
    try {
      const isPresent = await this.getById(id);
      if (!isPresent) {
        const parsedAlbums = await this.getAll();
        parsedAlbums.push(album);
        this.fs.writeFile(this.file, JSON.stringify(parsedAlbums));
        console.log(`Ha agregado el id: ${id} a la lista de albums`);
      } else {
        console.log(`El id: ${id}, ya existe`);
      }
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }

  async getById(id) {
    try {
      const parsedAlbums = await this.getAll();
      const isPresent = parsedAlbums.find((album) => album.id === id);
      return isPresent;
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }

  async getAll() {
    try {
      const albums = await this.fs.readFile(this.file, `utf-8`);
      const parsedAlbums = JSON.parse(albums);
      return parsedAlbums;
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const isPresent = await this.getById(id);
      if (isPresent) {
        const parsedAlbums = await this.getAll();
        const albumIndex = parsedAlbums.findIndex((album) => album.id);
        parsedAlbums.splice(albumIndex, 1);
        this.fs.writeFile(this.file, JSON.stringify(parsedAlbums));
      }
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }

  async deleteAll() {
    try {
      const parsedAlbums = await this.getAll();
      if (parsedAlbums.length > 0) {
        parsedAlbums.length = 0;
        this.fs.writeFile(this.file, JSON.stringify(parsedAlbums));
      } else {
        console.log(`Nada para borrar...`);
      }
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  }
}

module.exports = {
  Container,
};
