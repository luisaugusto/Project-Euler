const countSequences = number => {
    let sequences = 1;
    let sequenceNum = number;

    while (sequenceNum > 1) {
        sequenceNum = sequenceNum % 2 ? (sequenceNum * 3) + 1 : sequenceNum / 2;
        sequences++;
    }

    return sequences;
};

const largestSequence = maxNum => {
    let highestSequence = 0;
    let highestSequenceCount = 0;

    for (let num = 1; num <= maxNum; num++) {
        const sequenceCount = countSequences(num);

        if (sequenceCount > highestSequenceCount) {
            highestSequence = num;
            highestSequenceCount = sequenceCount;
        }
    }

    return highestSequence;
};

console.time('Problem 14');
console.log(largestSequence(1000000));
console.timeEnd('Problem 14');