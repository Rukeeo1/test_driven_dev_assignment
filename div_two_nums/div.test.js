const div = require('./div');

describe('should divide numbers', function(){
    //should perform it's basic function;
    it('should divide the first number with the second one', function(){
        expect(div.div(6,2)).toBe(3);
    });

    it('should allow only numubers', function(){
        expect(div.div('s',3)).toBe('please ensure both parameters are numbers');
        expect(div.div(3,{})).toBe('please ensure both parameters are numbers');
    });

    it('should return floating point numbers to 2 decimal places', function(){
        expect(div.div(0.3,0.2)).toBe(1.50);
    });

    it('should return floating point numbers to 2 decimal places', function(){
        expect(div.div(Infinity,Infinity)).toBe(Infinity);
    });

    it('should return floating point numbers to 2 decimal places', function(){
        expect(div.div(null,null)).toBe('please ensure both parameters are numbers');
    });

    it('should return floating point numbers to 2 decimal places', function(){
        expect(div.div(true,true)).toBe('please ensure both parameters are numbers');
    });

});

/*
    handle floating point numbers by approximating them.
*/