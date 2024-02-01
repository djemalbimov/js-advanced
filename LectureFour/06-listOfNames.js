
function printSortedNames(names) {
    const sortedNames = names.slice().sort((a, b) => a.localeCompare(b));

    sortedNames.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

printSortedNames(["John", "Bob", "Christina", "Ema"]);