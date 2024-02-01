function customSortStrings(arr) {
    arr.sort((a, b) => {

        const lengthComparison = a.length - b.length;

        if (lengthComparison === 0) {
            return a.localeCompare(b, undefined, { sensitivity: 'base' });
        }

        return lengthComparison;
    });

    arr.forEach(element => console.log(element));
}

customSortStrings(['alpha', 'beta', 'gamma']);
customSortStrings(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
customSortStrings(['test', 'Deny', 'omen', 'Default']);