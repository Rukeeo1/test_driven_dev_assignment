const strConcat = require('./concatenate');

describe('should concatenate two strings', function(){
    it('should add two strings', function(){
        expect(strConcat.concat('ruk','ee')).toBe('rukee');
    });

    it('should ignore non strings', function(){
        expect(strConcat.concat('rukee', {})).toBe('all parameters must be string');
        expect(strConcat.concat('rukee', [])).toBe('all parameters must be string');
        expect(strConcat.concat(2,'hello')).toBe('all parameters must be string');
    });
});