function sortAndPrintSecondHalf(inputArray) {

    inputArray.sort((a, b) => a - b);

    const splitIndex = Math.floor(inputArray.length / 2);

    return inputArray.slice(splitIndex)
}

console.log(sortAndPrintSecondHalf([4, 7, 2, 5]));
console.log(sortAndPrintSecondHalf([3, 19, 14, 7, 2, 19, 6]));