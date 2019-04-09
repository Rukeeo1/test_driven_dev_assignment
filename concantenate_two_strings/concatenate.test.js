const strConcat = require('./concatenate');

describe('should concatenate two strings', function(){
    it('should add two strings', function(){
        expect(strConcat.concat('ruk','ee')).toBe('rukee');
    });

    it('should ignore non strings', function(){
        expect(strConcat.concat('rukee', {})).toBe('all parameters must be string');
        expect(strConcat.concat('rukee', [])).toBe('all parameters must be string');
        expect(strConcat.concat(2,'hello')).toBe('all parameters must be string');
        expect(strConcat.concat('','')).toBe('strings can\'t be empty');
        expect(strConcat.concat(true,false)).toBe('all parameters must be string');
        //strings might not be empty but might contain only white space...
        expect(strConcat.concat({},[])).toBe('all parameters must be string');
        expect(strConcat.concat(null,undefined)).toBe('all parameters must be string');
        expect(strConcat.concat('0.2','undefined')).toBe('0.2undefined');
    });
});