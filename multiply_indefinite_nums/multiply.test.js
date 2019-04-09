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

    it("should handle floating point numbers well", function(){
        expect(multiply.multiply(2,0.4,0.2,0.1,0.4)).toEqual(0.0064);
    });

    

});