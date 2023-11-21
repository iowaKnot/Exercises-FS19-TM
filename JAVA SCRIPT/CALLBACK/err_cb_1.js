// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.

// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    if (a === 'Number' && b === 'Number') {
        callback(null, 'a && b are valid numbers.');
    } else {
        callback(new Error('a &&/|| b are not valid numbers!'), null)
    }
};

function displayResult(result) {
    console.log(`Il risultato é: ${result}`);
};

performOperation(5, 3, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data(a * b));
    }
});