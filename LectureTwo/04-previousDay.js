function printPreviousDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    const previousYear = previousDate.getFullYear();
    const previousMonth = previousDate.getMonth() + 1;
    const previousDay = previousDate.getDate();
    
    console.log(`${previousYear}-${previousMonth}-${previousDay}`);
}

printPreviousDay(2016, 9, 30);
printPreviousDay(2015, 5, 10);