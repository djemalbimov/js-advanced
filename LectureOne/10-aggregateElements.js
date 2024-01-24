function arrayOperations(arr) {

    const sumAi = arr.reduce((acc, num) => acc + num, 0);
    console.log(sumAi);

    const sumInverseAi = arr.reduce((acc, num) => acc + 1 / num, 0);
    console.log(sumInverseAi);

    const concatAi = arr.join('');
    console.log(concatAi);
}

arrayOperations([1, 2, 3]);
arrayOperations([2, 4, 8, 16]);