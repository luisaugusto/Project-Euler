const pythagorean = s => {
    let product = 0;

    for (let a = 1; a < s; a++) {
        for (let b = a + 1; b < s; b++) {
            const c = s - b - a;
            if (a*a + b*b === c*c) {
                product = a*b*c;
                break;
            }
        }

        if (product) break;
    }

    return product;
};

console.time('Problem 9');
console.log(pythagorean(1000));
console.timeEnd('Problem 9');