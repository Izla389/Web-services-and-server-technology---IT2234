// Function
function PrintMsg() {
    console.log("Hello JS");
}
PrintMsg();

// Return type function
function sum() {
    return 5 + 6;
}
console.log(sum());

// Parameter return type
function sub(a, b) {
    return a - b;
}
console.log(sub(5, 3));

// Boolean function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Recursive function to print numbers from 1 to n
function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1);
}
printNumbers(5); // Prints 1 to 5
