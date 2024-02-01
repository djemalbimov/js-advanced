function nonDecreasingSubset(inputArray) {
    let result = [];

    for (const current of inputArray) {
        if (result.length === 0 || current >= result[result.length - 1]) {
            result.push(current);
        }
    }

    return result;
}

const input = [1, 3, 8, 4, 10, 12, 3, 2, 24];
const output = nonDecreasingSubset(input);

console.log(output);