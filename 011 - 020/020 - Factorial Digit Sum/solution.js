const factorial = num => [...Array(num)].reduce((acc, v, index) => BigInt(index + 1) * BigInt(acc), 1n);
const sumDigits = number => number.split('').reduce((sum, i) => sum + Number(i), 0);

console.time('Problem 20');

const number = String(factorial(100));
console.log(sumDigits(number));

console.timeEnd('Problem 20');