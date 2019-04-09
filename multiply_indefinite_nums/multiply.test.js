const multiply = require('./multiply');

describe('multiply an indefinite number of elements',function(){
    //it should perform it's basic function
    it('should multiply an infinite number of arguments', function(){
        expect(multiply.multiply(2,2,2,2)).toBe(16);
    });

    it("should contain only numbers", function(){
        expect(multiply.multiply(2,2,3,'s')).toEqual('please ensure all arguments passed in are numbers');
        expect(multiply.multiply(2,2,2,{})).toBe('please ensure all arguments passed in are numbers');
    });

    

});