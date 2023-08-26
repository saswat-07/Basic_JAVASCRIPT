/*
    Practice 2 - Count Days for a Given Month and Year​
*/

// Declare and initialize variables to store month and year values
let year=2012;
let mon=2;
// Declare a variable to store day count​.
let daycount;
// Write the logic used to check the number of days in the month using switch case
switch (mon) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daycount=31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daycount=30;
        break;
    case 2:
        if(year%4==0 && year%100==year%4 ||year%400==0){
            daycount=29;
        }
        else{
            daycount=28;
        }
        break;
    default:
        console.log("Invalid, please enter 1 to 12");
        break;
}
// Display the value of day count
console.log(`No. of days ${daycount}`);