const multiplesOf3Or5 = range => [...Array(range).keys()].filter(num => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num, 0);

console.time('Problem 001');
console.log(multiplesOf3Or5(1000));
console.timeEnd('Problem 001');