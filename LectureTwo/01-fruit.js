function calculateMoneyForFruit(fruit, weightInGrams, pricePerKilogram) {

    const weightInKilograms = weightInGrams / 1000;
    const money = (weightInKilograms * pricePerKilogram);

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculateMoneyForFruit('orange', 2500, 1.80);
calculateMoneyForFruit('apple', 1563, 2.35);