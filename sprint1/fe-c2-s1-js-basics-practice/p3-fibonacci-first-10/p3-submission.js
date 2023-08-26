/*
    Practice 3 - Fibonacci Series for First 10 numbers
*/ 

// Declare and initialize variable to store count value.
let count=8;
// Declare and initialize variables to store the first two values of the fibonacci series.
let first=0;
let second=1;
let next;
// Display the first two values of the fibonacci series.
console.log(first);
console.log(second);
// Write `for` loop to generate rest of the values in the fibonacci series.
for (let i=1; i <=count; i++) {
    console.log(second);
    next=first+second;
    first=second;
    second=next;

}
