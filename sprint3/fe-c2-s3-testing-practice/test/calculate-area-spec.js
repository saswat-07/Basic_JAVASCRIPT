// Write test code here
const expect=require('chai').expect;
const solution=require('../solution/calculate-area-solution');
describe('Solution', function () {
    it('should have function calculateAreaOfSquare()', function () {
        expect(typeof solution.calculateAreaOfSquare).to.be.equal('function');
    });
    it('should have function calculateAreaOfCircle()', function () {
        expect(typeof solution.calculateAreaOfCircle).to.be.equal('function');
    });
    it('should have function calculateAreaOfRectangle()', function () {
        expect(typeof solution.calculateAreaOfRectangle).to.be.equal('function');
    });
});
describe('Function calculateAreaOfSquare', function() {
    it('should return area of square for the valid input provided', function() {
        const squareArea = solution.calculateAreaOfSquare(10);
        expect(squareArea).to.be.equal(100);
    });
    it('should return message insufficient input if less than 1 parameter is passed', function() {
        const result = solution.calculateAreaOfSquare();
        expect(result).to.be.equal("Insufficient Inputs");
    });
    it('should return message invalid input type if the parameter is not a number', function() {
        const result = solution.calculateAreaOfSquare("O");
        expect(result).to.be.equal("Invalid Input Types, Side Should Be A Number !!");
    });
    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const result = solution.calculateAreaOfSquare(-50);
        expect(result).to.be.equal("Incorrect Input, Side Cannot Be Zero or Negative !!");
    });
});
describe('Function calculateAreaOfCircle', function() {
    it('should return area of circle for the valid input provided', function() {
        const circleArea = solution.calculateAreaOfCircle(10);
        expect(circleArea).to.be.equal(314);
    });
    it('should return message insufficient input if less than 1 parameter is passed', function() {
        const result = solution.calculateAreaOfCircle();
        expect(result).to.be.equal("Insufficient Inputs");
    });
    it('should return message invalid input type if the parameter is not a number', function() {
        const result = solution.calculateAreaOfCircle("O");
        expect(result).to.be.equal("Invalid Input Type, Radius Should Be A Number !!");
    });
    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const result = solution.calculateAreaOfCircle(-50);
        expect(result).to.be.equal("Incorrect Input, Radius Cannot Be Zero or Negative !!");
    });
});
describe('Function calculateAreaOfRectangle', function() {
    it('should return area of rectangle for the valid input provided', function() {
        const rectangleArea = solution.calculateAreaOfRectangle(10,20);
        expect(rectangleArea).to.be.equal(200);
    });
    it('should return message insufficient input if less than 2 parameter is passed', function() {
        const result = solution.calculateAreaOfRectangle(10);
        expect(result).to.be.equal("Insufficient Inputs");
    });
    it('should return message invalid input types if the parameters are not of type numbers', function() {
        const result = solution.calculateAreaOfRectangle("O","L");
        expect(result).to.be.equal("Invalid Input Types, Length and Breadth Should Be A Number !!");
    });
    it('should return message incorrect input if the value of the parameter is less than or equal to 0', function() {
        const result = solution.calculateAreaOfRectangle(-50,0);
        expect(result).to.be.equal("Incorrect Input, Length and Breadth Cannot Be Zero or Negative !!");
    });
});