// Dato un array originalArray, crea un nuovo array chiamato cloneArray che sia una copia superficiale di originalArray utilizzando l'operatore spread.

const originalArray = [1, 2, 3, 4, 5];
const cloneArray = [...originalArray];

originalArray.push(18); // Qui per esempio pusho 18 come elemento dell'originalArray, senza pero' andare a modificare cloneArray che mantiene cio' che aveva precedentemente memorizzato.


console.log(originalArray);
console.log(cloneArray);