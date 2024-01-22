function checkSameDigitsAndSum(number) {
    const numberString = number.toString();
    let allSame = true;
    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i], 10);
        sum += digit;

        if (digit !== parseInt(numberString[0], 10)) {
            allSame = false;

        }
    }

    console.log(allSame);
    console.log(sum);
}

checkSameDigitsAndSum(2222222);
checkSameDigitsAndSum(1234);