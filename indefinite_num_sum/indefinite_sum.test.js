const sumAll = require('./indefinite_sum');

describe('sum all Numbers', function(){
    // it('argume')
    it('should return a value', function(){
        expect(sumAll.sumEveryThing(2,2)).toBeDefined()
        expect(sumAll.sumEveryThing()).toBeDefined()
    });

    it('should add all elements passed as arguments', function(){
        expect(sumAll.sumEveryThing(2,3,4,5,6,3,4,5)).toBe(32);
    });
});

it('should return a value', function(){
    // expect(sumAll.sumEveryThing(2,2)).toBeDefined()
    expect(sumAll.sumEveryThing()).toBeDefined()
});