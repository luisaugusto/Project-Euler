const factorial = number => [...Array(number)].reduce((result, _, index) => result * (index + 1), 1);
const numberRoutes = gridSize => factorial(gridSize * 2) / Math.pow(factorial(gridSize), 2);

console.time('Problem 15');
console.log(numberRoutes(20));
console.timeEnd('Problem 15');