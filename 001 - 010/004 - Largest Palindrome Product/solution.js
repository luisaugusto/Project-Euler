const largestPalindrome = () => {
    let palindrome = 0;

    for (let x = 999; x > 99; x--) {
        for (let y = 999; y > 99; y--) {
            const product = x * y;
            if (product < palindrome) break;

            const reverseProduct = product.toString().split('').reverse().join('');

            if (product === Number(reverseProduct)) {
                palindrome = product;
                break;
            }
        }
    }

    return palindrome;
};

console.time('Problem 4');
console.log(largestPalindrome());
console.timeEnd('Problem 4');