const fs = require('fs');

const getScore = names => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return names.reduce((sum, name, index) => {
        const nameScore = name.split('').reduce((score, letter) => score + letters.indexOf(letter.toLowerCase()) + 1, 0)
        return (nameScore * (index + 1)) + sum;
    }, 0);
}

console.time('Problem 22');

const names = fs.readFileSync('names.txt', 'utf8');
const namesArray = names.replace(/"/g, '').split(',').sort();

console.log(getScore(namesArray));

console.timeEnd('Problem 22');