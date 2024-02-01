function logNthStepElements(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i])
    }
    return result;
}

console.log(logNthStepElements(['5', '20', '31', '4', '20'], 2));
console.log(logNthStepElements(['dsa', 'asd', 'test', 'tset'], 2));
console.log(logNthStepElements(['1', '2', '3', '4', '5'], 6));