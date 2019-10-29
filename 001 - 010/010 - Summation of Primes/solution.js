const sumOfPrimes = max => {
    let sum = 0;
    let num = 1;

    while (num < max) {
        if (num > 2) num += 2;
        else num++;

        let isPrime = true;
        let maxFactor = Math.floor(Math.sqrt(num));

        for (let x = 3; x <= maxFactor; x++) {
            if (num % x === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) sum += num;
    }

    return sum;
};

console.time('Problem 10');
console.log(sumOfPrimes(2000000));
console.timeEnd('Problem 10');