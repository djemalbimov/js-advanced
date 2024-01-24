function sumNumbersInRange(strN, strM) {
    const n = +strN;
    const m = +strM;

    if (!Number.isFinite(n) || !Number.isFinite(m)) {
        console.log('Invalid input. Please provide valid numbers.');
        return;
    }

    let sum = 0;

    for (let i = n; i <= m; sum += i, i++);

    console.log(sum);
}

sumNumbersInRange('1', '5');
sumNumbersInRange('-8', '20');