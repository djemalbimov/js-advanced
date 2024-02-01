function rotateArray(arr, rotations) {
    rotations = rotations % arr.length;

    const rotatedArray = arr.slice(-rotations).concat(arr.slice(0, -rotations));

    console.log(rotatedArray.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);