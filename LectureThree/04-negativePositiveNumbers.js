function processArray(inputArray) {
    let resultArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < 0) {
            resultArray.unshift(inputArray[i]);

        } else {
            resultArray.push(inputArray[i]);
        }
    }

    for (let element of resultArray) {
        console.log(element);
    }
}

processArray([7, -2, 8, 9]);
processArray([3, -2, 0, -1]);