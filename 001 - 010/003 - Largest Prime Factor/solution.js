const largestPrimeFactor = (num, count = 2) => {
    while (count < num) {
        while (num % count === 0) {
            num = num / count;
        }

        count++;
    }

    return num;
};

console.time('Problem 3');
console.log(largestPrimeFactor(600851475143));
console.timeEnd('Problem 3');