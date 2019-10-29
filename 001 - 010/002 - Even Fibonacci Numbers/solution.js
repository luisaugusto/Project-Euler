const evenFibonacci = max => {
    let prev = 0;
    let sum = 1;
    let evenSum = 0;

    while (sum + prev <= max) {
        sum += prev;
        prev = sum - prev;

        if (sum % 2 === 0) {
            evenSum += sum;
        }
    }

    return evenSum;
};

console.time('Problem 002');
console.log(evenFibonacci(4000000));
console.timeEnd('Problem 002');