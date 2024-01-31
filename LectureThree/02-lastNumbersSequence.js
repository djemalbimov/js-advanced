function generateSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = Math.max(0, i - k); j < i; j++) {
            sum += sequence[j];
        }

        sequence.push(sum);
    }

    return sequence;
}

const result = generateSequence(6, 3);
console.log(result);