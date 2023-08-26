// Write test code here
const expect=require('chai').expect;
const solution=require('../solution/ticket-booking-bill-calculator');
describe('solution', function () {
    it('should have function getPerComboPrice', function () {
        expect(typeof solution.getPerComboPrice).to.be.equal('function');
    });
    it('should have function getPerTicketPriceBySeatType', function () {
        expect(typeof solution.getPerTicketPriceBySeatType).to.be.equal('function');
    });
    it('should have function calculateTotalTicketAmount', function () {
        expect(typeof solution.calculateTotalTicketAmount).to.be.equal('function');
    });
    it('should have function calculateTotalComboAmount', function () {
        expect(typeof solution.calculateTotalComboAmount).to.be.equal('function');
    }); 
    it('should have function calculateTotalBillAmount', function () {
        expect(typeof solution.calculateTotalBillAmount).to.be.equal('function');
    });
});

describe('getPerComboPrice',function(){
    it('should return price for Jr.Combo',function(){     //jr.combo refers to combo1
        const pricePerCombo = solution.getPerComboPrice("Combo-1");
        expect(pricePerCombo).to.be.equal(2.5);
    });
    it('should return error message `Invalid Combo Type` for invalid combo type value',function(){     
        const result = solution.getPerComboPrice("Combo-4");
        expect(result).to.be.equal("Invalid Combo Type");
    });
    
});
describe('getPerTicketPriceBySeatType',function(){
    it('should return per ticket price for Gold seat',function(){     
        const pricePerTicket = solution.getPerTicketPriceBySeatType("Gold");
        expect(pricePerTicket).to.be.equal(6.0);
    });
    it('should return error message `Invalid Seat Type` for invalid seat type value',function(){     
        const result = solution.getPerTicketPriceBySeatType("Bronze");
        expect(result).to.be.equal("Invalid Seat Type");
    });
    
});
describe('calculateTotalTicketAmount',function(){
    it('should return total ticket amount for 2 Silver seats',function(){    
        const totalTicketPrice = solution.calculateTotalTicketAmount("Silver",2);
        expect(totalTicketPrice).to.be.equal(10.0);
    });
    it('should return error message if ticket count is zero',function(){     
        const result = solution.calculateTotalTicketAmount("Silver",0);
        expect(result).to.be.equal( "Incorrect Input, TicketCount cannot be Zero or Negative !!");
    });
    it('should return error message if seat type is invalid',function(){     
        const result = solution.calculateTotalTicketAmount("Bronze",2);
        expect(result).to.be.equal("Invalid Seat Type");
    });
    
});
describe('calculateTotalComboAmount',function(){
    it('should return total amount for 3 Sr.Combo',function(){     //Sr.combo refers to combo2
        const totalComboPrice = solution.calculateTotalComboAmount("Combo-2",3);
        expect(totalComboPrice).to.be.equal(13.5);
    });
    it('should return error message if combo count is zero',function(){     
        const result = solution.calculateTotalComboAmount("Combo-2",-1);
        expect(result).to.be.equal("Incorrect Input, ComboCount cannot be Zero or Negative !!");
    });
    it('should return error message if combo type is invalid',function(){     
        const result = solution.calculateTotalComboAmount("Combo-4",3);
        expect(result).to.be.equal("Invalid Combo Type");
    });
    
});
describe('calculateTotalBillAmount',function(){
    it('should return total booking amount for 2 Platinum seats and 1 Jumbo.Combo',function(){     //jumbo.combo refers to combo3
        const totalBill = solution.calculateTotalBillAmount("Platinum",2,"Combo-3",1);
        expect(totalBill).to.be.equal(24.5);
    });
    it('should return error message if ticket count is negative',function(){     
        const result = solution.calculateTotalBillAmount("Platinum",-1,"Combo-3",1);
        expect(result).to.be.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    });
    it('should return error message if combo count is negative',function(){     
        const result = solution.calculateTotalBillAmount("Platinum",1,"Combo-3",-3);
        expect(result).to.be.equal("Incorrect Input, TicketCount and ComboCount cannot be Zero or Negative !!");
    });
    
});
