import ev from './events.js';

// o .on so funciona se chamado antes dos .emit
ev.on('testeEvento', () => {
    console.log('ouviu também');
});

//enviando o evento
//primeiro parametro: nome do evento
// segundo parametro: valor
ev.emit('testeEvento', 'bla bla bla');