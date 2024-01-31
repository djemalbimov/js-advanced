function logBiggestElement(matrix) {
    let biggestElement = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > biggestElement) {
                biggestElement = matrix[i][j];
            }
        }
    }

    console.log(biggestElement);
}

logBiggestElement([
    [20, 50, 10], 
    [8, 33, 145]
]);
logBiggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);