const subTwo = require('./diff');

describe('returns the difference between two numbers', function(){
  it('should return the difference between two numbers', function(){
    expect(subTwo.diff(2,2)).toBe(0);
  });  

  it('all paramaters passed in must be numbers',function(){
    expect(subTwo.diff('2')).toBe("all parameter's must be numbers");
  });

  it('should work well with decimal numbers to 2 decimal places', function(){
    expect(subTwo.diff(0.3,0.1)).toBe(0.2);
  });
});

//string like numbers can be converted to numbers...

