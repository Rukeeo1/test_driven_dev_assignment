const subTwo = require('./diff');

describe('returns the difference between two numbers', function(){
  //it does it's basic function
  it('should return the difference between two numbers', function(){
    expect(subTwo.diff(2,2)).toBe(0);
  });  

  //all parameter's must be numbers
  it('all paramaters passed in must be numbers',function(){
    expect(subTwo.diff('2',3)).toBe("all parameter's must be numbers");
    expect(subTwo.diff({},3)).toBe('all parameter\'s must be numbers');
    //expect(subTwo.diff('rukee',seyi)).toBe("all parameter's must be numbers");
  });
  //works well with floating point numbers
  it('should work well with decimal numbers to 2 decimal places', function(){
    expect(subTwo.diff(0.3,0.1)).toBe(0.2);
  });

  //all elements must be defined.
  it('expects all parameters to be defined',function(){
    expect(subTwo.diff('rukee','seyi')).toBeDefined();
  });
});

//string like numbers can be converted to numbers...

