function performOperations(startingNumber, ...operations) {
    let currentNumber = parseFloat(startingNumber);

    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                currentNumber /= 2;
                break;
            case 'dice':
                currentNumber = Math.sqrt(currentNumber);
                break;
            case 'spice':
                currentNumber += 1;
                break;
            case 'bake':
                currentNumber *= 3;
                break;
            case 'fillet':
                currentNumber -= 0.2 * currentNumber;
                break;
            default:
                console.log(`Invalid operation: ${operation}`);
                return;
        }
        console.log(currentNumber);
    }
}

performOperations('32', 'chop', 'chop', 'chop', 'chop', 'chop');
performOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');