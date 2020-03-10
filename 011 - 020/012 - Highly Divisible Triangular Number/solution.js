const findDivisors = number => {
    let divisors = [];
    let maxNumber = number;
    let currentNumber = 1;

    while (currentNumber <= maxNumber) {
        if (number % currentNumber === 0) {
            maxNumber = number / currentNumber;
            divisors.push(currentNumber, maxNumber);
        }

        currentNumber++;
    }

    return divisors.length;
};

const filterTriangles = minDivisors => {
    let triangleIndex = 1;
    let triangleValue = 1;
    let valueOverMin = 0;

    while (!valueOverMin) {
        const numDivisors = findDivisors(triangleValue);

        if (numDivisors > minDivisors) {
            valueOverMin = triangleValue;
        }

        triangleIndex++;
        triangleValue += triangleIndex;
    }

    return valueOverMin;
};

console.time('Problem 12');
console.log(filterTriangles(500));
console.timeEnd('Problem 12');