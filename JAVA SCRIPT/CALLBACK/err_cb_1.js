// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.

// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
    const result = a * b;
    
    if (isNaN(result)) {
        callback(new Error('Il risultato che vuoi ottenere deve essere un numero valido, verifica che i parametri siano numeri.'), null);
    } else {
        callback(null, result);
    }
}

function displayResult(error, result) {
    if (error) {
        console.error(`L'errore é il seguente: ${error.message}`);
    } else {
        console.log(`Il risultato è: ${result}`);
    }
}

performOperation(7, 3, displayResult);