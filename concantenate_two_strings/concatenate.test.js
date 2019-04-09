const strConcat = require('./concatenate');

describe('should concatenate two strings', function(){
    it('should add two strings', function(){
        expect(strConcat.concat('ruk','ee')).toBe('rukee');
    });
});