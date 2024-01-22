function calculateGCD(a, b) {
    
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    console.log(a);
}

calculateGCD(15, 5);
calculateGCD(2154, 458);