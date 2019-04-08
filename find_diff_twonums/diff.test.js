const subTwo = require('./diff');

describe('returns the difference between two numbers', function(){
  it('should return the difference between two numbers', function(){
    expect(subTwo.diff(2,2)).toBe(0);
  });  
});

