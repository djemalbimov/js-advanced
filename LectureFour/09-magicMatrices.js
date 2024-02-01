function isMagicalMatrix(matrix) {

    const arraySum = arr => arr.reduce((sum, num) => sum + num, 0);

    const numRows = matrix.length;
    const numCols = matrix[0].length;


    const firstRowSum = arraySum(matrix[0]);

    for (let i = 1; i < numRows; i++) {
        if (arraySum(matrix[i]) !== firstRowSum) {
            return false;
        }
    }
    
    for (let j = 0; j < numCols; j++) {
        const colSum = matrix.reduce((sum, row) => sum + row[j], 0);
        if (colSum !== firstRowSum) {
            return false;
        }
    }
    
    return true;
}

// Example usage
const inputMatrix = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
];

const isMagical = isMagicalMatrix(inputMatrix);
console.log(isMagical);
