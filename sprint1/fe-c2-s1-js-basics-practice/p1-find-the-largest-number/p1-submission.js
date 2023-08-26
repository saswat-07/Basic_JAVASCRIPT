/*
    Practice 1 - Find the Largest Number​
*/

// Declare and initialize variables
let a=30;
let b=50;
let c=45;

// Declare a variable to store the resultant largest number
let result;

// Write logic to find the largest number using nested-if
if (a>b) {
    if (a>c) {
        result=a;
    } else {
        result=c;
    }
} else {
    if (b>c) {
        result=b;
    } else {
        result=c;
    }
}

// Display the largest number
console.log(`The largest number is ${result}`)

// Write logic to find the largest number using ternary operator

result=(a>b)?(a>c?a:c):(b>c?b:c);
// Display the largest number
console.log(`The largest number is ${result}`)