// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.

// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma(...rest) {
    return rest.reduce((a, number) => a + number, 0);
}

const mySum = somma(3, 7, 15, 38, 151, 399);
console.log(mySum);