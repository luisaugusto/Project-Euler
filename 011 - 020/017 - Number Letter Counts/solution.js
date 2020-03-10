const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const countLetters = number => {
    if (number < 20) return ones[number].length;

    const integers = String(number).split('').map(Number).reverse();
    const [one, ten, hundred, thousand] = integers;
    const teens = Number(ten + '' + one);

    let word = thousand ? ones[thousand] + 'thousand' : '';
    word += hundred ? ones[hundred] + 'hundred' : '';
    word += (ten || one) && (thousand || hundred) ? 'and' : '';
    word += teens < 20 ? ones[teens] : tens[ten] + ones[one];

    return word.length;
};

const countLettersRange = max => [...Array(max)].reduce((sum, _, index) => countLetters(index + 1) + sum, 0);

console.time('Problem 17');
console.log(countLettersRange(1000));
console.timeEnd('Problem 17');