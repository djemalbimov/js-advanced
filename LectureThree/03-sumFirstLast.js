function printSumOfFirstAndLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    const sum = first + last;
    console.log(sum);
}

printSumOfFirstAndLast(['20', '30', '40']);
printSumOfFirstAndLast(['20', '30', '40', '50']);