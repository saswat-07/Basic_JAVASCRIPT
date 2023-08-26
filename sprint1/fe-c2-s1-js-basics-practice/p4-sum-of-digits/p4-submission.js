/*
    Practice 4 - Sum the Digits of a Number
*/

// Declare and initialize variable to store the value whose digits need to be added up.
let num=4386;
let rem;


// Declare and initialize variable to store the sum value.

let sum=0;

// Write `while` loop to calculate sum of digits.
while(num>0){
    rem=num%10;
    sum=sum+ Math.floor(rem);
    num=num/10;
}
// Display the value of sum.
console.log(`Sum of digits of number of 4356 =${sum}`)