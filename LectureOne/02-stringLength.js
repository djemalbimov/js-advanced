function calculateLengthAndAverage(str1, str2, str3) {

    const sumLength = str1.length + str2.length + str3.length;

    const averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);

}

calculateLengthAndAverage('chocolate', 'ice cream', 'cake');
calculateLengthAndAverage('pasta', '5', '22.3');