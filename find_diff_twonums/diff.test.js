const subTwo = require('./diff');

describe('returns the difference between two numbers', function(){
  it('should return the difference between two numbers', function(){
    expect(subTwo.diff(2,2)).toBe(0);
  });  

  it('all paramaters passed in must be numbers',function(){
    expect(subTwo.diff('2')).toBe("all parameter's must be numbers");
  });
});

//string like numbers can be converted to numbers...

