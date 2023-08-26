const chai=require('chai');
const expect=chai.expect;
const display=require('../solution/script');
describe('Script',function(){
    it('should have function display()',function(){
            expect(typeof display).to.equal('function');
    });
});
