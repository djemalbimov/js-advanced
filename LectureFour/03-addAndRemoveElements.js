function addAndRemove(inputCommands) {
    let result = [];
    let number = 1;

    for (const command of inputCommands) {
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            if (result.length > 0) {
                result.pop();
            }
        }
        number++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);