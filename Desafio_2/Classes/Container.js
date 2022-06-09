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
      console.log(`Hubo un error al inicializar el archivo: ${error}`);
    }
  }

  async checkContent() {
    try {
      const hasContent = await this.fs.readFile(this.file, `utf-8`);
      return hasContent;
    } catch (error) {
      console.log(`Hubo un error al chequear el contenido: ${error}`);
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
        return `Ha agregado el id: ${id} a la lista de álbumes`;
      } else {
        return `El álbum con id: ${id}, ya existe`;
      }
    } catch (error) {
      console.log(`Hubo un error al guardar un álbum en el archivo: ${error}`);
    }
  }

  async getById(id) {
    try {
      const parsedAlbums = await this.getAll();
      const isPresent = parsedAlbums.find((album) => album.id === id);
      return isPresent;
    } catch (error) {
      console.log(`Hubo un error al obtener un álbum por su id: ${error}`);
    }
  }

  async getAll() {
    try {
      const albums = await this.fs.readFile(this.file, `utf-8`);
      const parsedAlbums = JSON.parse(albums);
      return parsedAlbums;
    } catch (error) {
      console.log(`Hubo un error al obtener todos los álbumes: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const isPresent = await this.getById(id);
      if (isPresent) {
        const parsedAlbums = await this.getAll();
        const albumIndex = parsedAlbums.findIndex((album) => album.id === id);
        parsedAlbums.splice(albumIndex, 1);
        console.log(`Se ha eliminado el álbum con id: ${id}`);
        this.fs.writeFile(this.file, JSON.stringify(parsedAlbums));
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar un álbum por su id: ${error}`);
    }
  }

  async deleteAll() {
    try {
      const parsedAlbums = await this.getAll();
      const preDeletedQuantity = parsedAlbums.length;
      if (parsedAlbums.length > 0) {
        parsedAlbums.length = 0;
        this.fs.writeFile(this.file, JSON.stringify(parsedAlbums));
        console.log(`Se han eliminado: ${preDeletedQuantity} álbumes`);
      } else {
        console.log(`Nada para borrar...`);
      }
    } catch (error) {
      console.log(`Hubo un error al eliminar todos los álbumes: ${error}`);
    }
  }
}

module.exports = {
  Container,
};
