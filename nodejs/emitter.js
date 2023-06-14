const MyEmitter = require("events");

const emitter = new MyEmitter();

emitter.on("FILE_READ", () => {
  console.log("Fichier lu");
});

emitter.emit("FILE_READ");
