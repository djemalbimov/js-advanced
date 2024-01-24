function performOperation(num1, num2, operator) {

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            console.log(`Invalid operator: ${operator}`);
            return;
    }

    console.log(result);
}

performOperation(5, 6, '+');
performOperation(3, 5.5, '*');