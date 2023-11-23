// Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. Utilizzare setTimeout per simulare un'operazione asincrona.

function ritardoDiDueSecondi() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`Operation completed.`);
        }, 2000);
    });
}

ritardoDiDueSecondi().then(function (messaggio) {
    console.log(messaggio);
}).catch(function (errore) {
    console.log(errore);
});