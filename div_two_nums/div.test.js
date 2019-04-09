const div = require('./div');

describe('should divide numbers', function(){
    //should perform it's basic function;
    it('should divide the first number with the second one', function(){
        expect(div.div(6,2)).toBe(3);
    });
});