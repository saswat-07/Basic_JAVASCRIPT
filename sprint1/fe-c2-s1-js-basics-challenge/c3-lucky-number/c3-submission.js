/*
    Challenge 3 - Know Your Lucky Number
*/ 

// Declare and initialize variable to store date in `mmddyyyy` format
let date = '05312022';
// Declare variable to store single digit sum value
let sum=0;
let rem;
// Write nested loop to calculate single digit sum of the date stored in `mmddyyyy` format
while (date > 0) {
    rem = date % 10;
    sum += rem;
    date = Math.floor(date / 10);
    while (sum >= 10) {
        let newSum = 0;
        while (sum > 0) {
            rem = sum % 10;
            newSum += rem;
            sum = Math.floor(sum / 10);
        }
        sum = newSum;
    }
}
// Display the single digit sum, which is the lucky number based on the date stored
console.log(`Your lucky number is ${sum}`);



