const numbers = [1, 3, 15, 33, 36, 47, 50, 99, 100];

function countOddNumbers() {
    const countNumbers = numbers.forEach(numero => console.log(numero));
    return countNumbers.filter(numero => numero % 2 !== 0);
}

console.log(countOddNumbers);