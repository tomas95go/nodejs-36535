const fs = require("fs/promises");
const { Album } = require(`./Classes/Albums`);
const { Container } = require(`./Classes/Container`);

const init = async () => {
  const container = new Container(`./products.txt`, fs);
  //container.initialize();
  const albumEminem = new Album(
    1,
    `The Slim Shady LP`,
    29.99,
    `https://i.discogs.com/I_xU77rzQzq7e4tTJMPjxDxcLjKpoAiTfCAgHdH_M0Y/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NjQ1/MS0xMjgzNjIwNzUy/LmpwZWc.jpeg`,
    `Eminem`,
    1999
  );

  const album2Pac = new Album(
    2,
    `All Eyez On Me`,
    29.99,
    `https://i.discogs.com/Za3tLn3OKkor1P1QYomKADXinr41wCBaxJZcGaLZhPY/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODM2/OS0xNjUwODE4MzMw/LTg1OTkuanBlZw.jpeg`,
    `2Pac`,
    1996
  );
  //container.save(album2Pac);
  //container.save(albumEminem);
  console.log(await container.deleteAll());
  console.log(await container.getAll());
  //container.deleteById(album2Pac.id);
};

init();
