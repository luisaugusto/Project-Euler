const sumSquareDiff = max => {
    let sum = 0;
    let squareSum = 0;

    for (let i = 1; i <= max; i++) {
        sum += i;
        squareSum += i * i;
    }

    return sum * sum - squareSum;
};

console.time('Problem 6');
console.log(sumSquareDiff(100));
console.timeEnd('Problem 6');