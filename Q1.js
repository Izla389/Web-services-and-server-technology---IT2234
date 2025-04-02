function getMaxPurchase(budget, keyboardPrices, mousePrices) {
    let maxAmount = -1;

    for (let k of keyboardPrices) {
        for (let m of mousePrices) {
            let total = k + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }

    return maxAmount;
}

// Example usage:
console.log(getMaxPurchase(60, [40, 50, 60], [5, 8, 12])); // Output: 58
console.log(getMaxPurchase(10, [3, 1], [5, 2, 8]));        // Output: 9
console.log(getMaxPurchase(20, [30, 15], [8, 10, 6]));     // Output: -1
