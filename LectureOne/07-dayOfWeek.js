function printDayNumber(dayOfWeek) {
    const daysMap = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    };

    const dayNumber = daysMap[dayOfWeek];

    if (dayNumber) {
        console.log(dayNumber);
    } else {
        console.log('error');
    }
}

printDayNumber('Monday');
printDayNumber('Friday');
printDayNumber('Invalid');