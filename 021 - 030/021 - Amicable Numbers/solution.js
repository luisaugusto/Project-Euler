const sumOfDivisors = number => {
    let sum = 0;

    for (let n = Math.floor(number / 2); n > 0; n--)
        if (number % n === 0) sum += n;

    return sum;
};

const amicableNumbersSum = maxNumber => {
    const numbers = [];

    for (let num = 1; num < maxNumber; num++) {
        const sum = sumOfDivisors(num);
        const pairSum = sumOfDivisors(sum);

        if (num === pairSum && sum !== pairSum && !numbers.includes(num)) {
            numbers.push(num, sum)
        }
    }

    return numbers.reduce((sum, num) => num + sum, 0);
};

console.time('Problem 21');
console.log(amicableNumbersSum(10000));
console.timeEnd('Problem 21');