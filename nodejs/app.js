// eventEmitter custom

class MyEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  }

  emit(event) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener());
    }
  }
}

const emitter = new MyEmitter();
emitter.on("FILE_READ", () => {
  console.log("file was read");
});

emitter.on("FILE_READ", () => {
  console.log("should save file");
});

emitter.emit("FILE_READ");

/*
const Emitter = require('./Emitter');
const events = require('./events');

const emitter = new Emitter();

emitter.on(events.FILE_OPENED, () => console.log('Fichier ouvert'));
emitter.on(events.FILE_OPENED, () => console.log('Fichier ouvert 2'));

emitter.emit(events.FILE_OPENED);

Nous créons deux listeners qui vont seulement console.log un message lorsqu'un évènement de type 'fileopened' sera émis.

Nous émettons ensuite un évènement de type events.FILE_OPENED ce qui va entraîner l'exécution de nos deux listeners.
*/
