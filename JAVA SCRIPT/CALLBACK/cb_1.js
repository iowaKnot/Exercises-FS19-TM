// Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.

// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.

const numbers = [1, 2, 3, 4, 5];

function doubleArray(arr, callback) {
    const solution = [];
    for(let i = 0; i < arr.length; i++) {
        solution.push(callback(arr[i]));
    }
    return solution; // Ale, vorrei scrivere questa cosa con il metodo .forEach(), ma non ci sto riuscendo, mi potresti spiegare come fare? Grazie mille!
};

function doubleValue(num) {
    return num * 2;
};

const doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]