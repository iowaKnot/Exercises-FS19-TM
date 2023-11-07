// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.

// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...rest) {
    return rest.filter(number => number %2 === 0);
}

const countEvenNumbers = filterOutOdds(1, 2, 47, 88, 193, 12, 33, 46, 99, 101, 433, 682);

console.log(countEvenNumbers); 