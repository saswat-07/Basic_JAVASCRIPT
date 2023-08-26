//Write the solution code here
function customerDetails() {
    alert("Customer Details" + "\n"
        + "-------------------------" + "\n"
        + "Customer Name :      Gary" + "\n"
        + "Customer Phone Number : 9887654321");

}
customerDetails();

function menuDetails() {
    alert("Menu Items" + "\n"
        + `S.No   Item Category   Price` + "\n"
        + "---------------------------------" + "\n"
        + `1)   Pizza(Regular) : $9.99` + "\n"
        + `2)   Pizza(Medium)  : $11.99` + "\n"
        + `3)   Pizza(Large)   : $13.99` + "\n"
        + `4)   Garlic Bread   : $5.99` + "\n"
        + `5)   Beverages      : $1.99`);
}

menuDetails();

function priceOfPizza(size) {
    if (size == 1) {
        return 9.99;
    } else if (size == 2) {
        return 11.99;
    }
    else if (size == 3) {
        return 13.99;
    }
    else {
        console.log("out of size,please choose 1,2 or 3!!!");
    }
}
function priceOfGarlicBread() {
    return 5.99;
}
function priceOfBeverages() {
    return 1.99;
}

function totalPizzaBill(pizzaprice, noOfPizza) {
    return pizzaprice * noOfPizza;
}
function totalGarlicBreadBill(garlicbreadprice, noOfGarlicBread) {
    return garlicbreadprice * noOfGarlicBread;
}
function totalBeveragesBill(beverageprice, noOfBeverages) {
    return beverageprice * noOfBeverages;
}

function calculateTotalBill(TotalPizza, TotalGarlicBread, TotalBeverages) {
    return TotalPizza + TotalGarlicBread + TotalBeverages;
}

function discountOnTotalBill(totalbill) {
    if (totalbill >= 50) {
        let discountAmount = totalbill * 0.1;
        return `Discount Amount : ${discountAmount.toFixed(2)}` + "\n"
            + `The final bill amount is : ${(totalbill - discountAmount).toFixed(2)}`;
    } else {
        return "No Discount, since the Total Bill is less than $50";
    }
}

let pizzaprice = priceOfPizza(1), noOfPizza = 10;
let garlicbreadprice = priceOfGarlicBread(), noOfGarlicBread = 5;
let beverageprice = priceOfBeverages(), noOfBeverages = 10;

let TotalPizza = totalPizzaBill(pizzaprice, noOfPizza);
let TotalGarlicBread = totalGarlicBreadBill(garlicbreadprice,
    noOfGarlicBread);
let TotalBeverages = totalBeveragesBill(beverageprice, noOfBeverages);

let totalbill = calculateTotalBill(TotalPizza, TotalGarlicBread,
    TotalBeverages);



function finalBillDetails() {
    let discount = discountOnTotalBill(totalbill);
    alert(`Bill Details` + "\n"
        + `----------------------` + "\n"
        + `Pizza(Regular)   : ${noOfPizza}` + "\n"
        + `GarlicBread     : ${noOfGarlicBread}` + "\n"
        + `Beverages       :${noOfBeverages}` + "\n"
        + "----------------------------------------------" + "\n"
        + `The total bill Amount is  : $${totalbill.toFixed(2)}` + "\n"
        + `${discount}`);
}
finalBillDetails();