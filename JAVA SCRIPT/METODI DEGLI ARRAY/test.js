const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(evenNumbers);
}

const evenCount = countEvenNumbers(numbers);
console.log(evenCount);

///////////////////////////////////////////////////////////

const numeri = [1, 3, 15, 33, 36, 47, 50, 99, 100];

function countOddNumbers() {
    const countNumeri = numeri.forEach(numero => console.log(numero));
    return countNumeri.filter(numero => numero % 2 !== 0);
}

const oddNumberi = countEvenNumbers();
console.log(oddNumberi);
