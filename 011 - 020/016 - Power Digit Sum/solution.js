const number = String(2n**1000n);

const sumDigits = number => number.split('').reduce((sum, i) => sum + Number(i), 0);

console.time('Problem 16');
console.log(sumDigits(number));
console.timeEnd('Problem 16');