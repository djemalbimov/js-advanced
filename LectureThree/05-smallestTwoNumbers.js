function printTwoSmallest(inputArray) {
    
    inputArray.sort((a, b) => a - b);
    
    console.log(`${inputArray[0]} ${inputArray[1]}`);
}

printTwoSmallest([30, 15, 50, 5]);
printTwoSmallest([3, 0, 10, 4, 7, 3]);