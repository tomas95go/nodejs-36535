const express = require("express");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const infoRouter = express.Router();

infoRouter.get("/", (request, response) => {
  try {
    response.status(200).json({
      message: "Datos recuperados con éxito",
      data: {
        execution_path: process.cwd(),
        id_process: process.pid,
        OS: process.platform,
        node_version: process.version,
        port: argv.port,
        memory: process.memoryUsage(),
        folder: __dirname,
      },
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al recuperar los datos",
    });
  }
});

module.exports = infoRouter;
