const smallestMultiple = maxMultiple => {
    let num = maxMultiple;
    let smallestMultipleFound = false;

    while (!smallestMultipleFound) {
        let divisibleByAll = true;

        for (let i = 3; i <= maxMultiple; i++) {
            if (num % i !== 0) {
                divisibleByAll = false;
                break;
            }
        }

        if (divisibleByAll) smallestMultipleFound = true;
        else num += maxMultiple;
    }

    return num;
};

console.time('Problem 5');
console.log(smallestMultiple(20));
console.timeEnd('Problem 5');