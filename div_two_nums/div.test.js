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

    
});