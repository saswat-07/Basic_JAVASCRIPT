//Write solution code 


function calculateAreaOfSquare(side) {
    return side*side;
}
function calculateAreaOfCircle(pi=3.14,radius) {
    return pi*radius*radius;
}
function calculateAreaOfRectangle(length,breadth) {
    return length*breadth;
}

console.log(`Area of Square= ${calculateAreaOfSquare(4)}`);
console.log(`Area of Circle= ${calculateAreaOfCircle(8.1)}`);
console.log(`Area of Rectangle= ${calculateAreaOfRectangle(5.5,3.5)}`);