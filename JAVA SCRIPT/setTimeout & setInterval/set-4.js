// Implementa la funzione lanciaDadi che:

// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.

// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.

// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.

// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

console.log("Lancio dei dadi in corso...");

let dado1 = Math.floor(Math.random() * (6-1 + 1)+1);
let dado2 = Math.floor(Math.random() * (6-1 + 1)+1);

function lanciaDadi(maxnum) {
    return `Dado 1 = ${dado1}, Dado 2 = ${dado2}`;
};

setTimeout(() => {
    console.log(lanciaDadi());
}, 2000);