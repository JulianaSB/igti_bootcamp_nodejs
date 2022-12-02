import {EventEmitter} from "events";

const eventEmitter = new EventEmitter;

//lendo o evento
//primeiro parametro: nome do evento
// segundo parametro: callback
eventEmitter.on('testeEvento', obj => {
    console.log('teste: ', obj);
});

export default eventEmitter;