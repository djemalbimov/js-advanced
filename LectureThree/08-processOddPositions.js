function processArray(inputArray) {

    const resultArray = inputArray
        .filter((_, index) => index % 2 !== 0)
        .map((element) => element * 2)
        .reverse();


    console.log(resultArray.join(' '));
}

processArray([10, 15, 20, 25]);
processArray([3, 0, 10, 4, 7, 3]);