function extractAndConvertToUpperCase(inputString) {

    const words = inputString.match(/\b\w+\b/g);

    if (words) {

        const upperCaseWords = words.map(word => word.toUpperCase());

        console.log(upperCaseWords.join(', '));
    } else {
        console.log('No words found in the input.');
    }
}

extractAndConvertToUpperCase('Hi, how are you?');
extractAndConvertToUpperCase('hello');