function logEqualNeighborPairs(matrix) {
    let equalPairsCount = 0;

    const areElementsEqual = (row1, col1, row2, col2) => matrix[row1][col1] === matrix[row2][col2];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (j < matrix[i].length - 1 && areElementsEqual(i, j, i, j + 1)) {
                equalPairsCount++;
            }
            if (i < matrix.length - 1 && areElementsEqual(i, j, i + 1, j)) {
                equalPairsCount++;
            }
        }
    }

    console.log(equalPairsCount);
}

logEqualNeighborPairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
logEqualNeighborPairs([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
logEqualNeighborPairs([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);