// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.

// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.8;
            if (success) {
                const user = { name: "John", age: 30 };
                resolve(user);
            } else {
                reject("Errore nel recupero dei dati dall'API");
            }
        }, 3500);
    });
}

fetchDataFromAPI().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});