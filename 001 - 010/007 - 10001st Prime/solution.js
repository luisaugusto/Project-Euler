const findPrime = num => {
    const prime = {
        index: 0,
        number: 1
    };

    while (prime.index < num) {
        if (prime.number > 2) prime.number += 2;
        else prime.number++;

        let isPrime = true;
        let maxFactor = Math.floor(Math.sqrt(prime.number));

        for (let x = 3; x <= maxFactor; x++) {
            if (prime.number % x === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) prime.index++;
    }

    return prime.number;
};

console.time('Problem 7');
console.log(findPrime(10001));
console.timeEnd('Problem 7');