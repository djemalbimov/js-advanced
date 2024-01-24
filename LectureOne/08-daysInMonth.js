function printDaysInMonth(month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    console.log(lastDayOfMonth);
}

printDaysInMonth(1, 2012);
printDaysInMonth(2, 2021);