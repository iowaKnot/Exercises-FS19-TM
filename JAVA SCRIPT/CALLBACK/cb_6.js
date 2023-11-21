// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.

function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const user = { name: "John", age: 30 };
        callback(user);
    }, 3500);
}

function handleData(data) {
    console.log(data);
}

fetchDataFromAPI(handleData);