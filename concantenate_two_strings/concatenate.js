const addTwoStrings = {
    concat: function(a,b){
        if(typeof a !== 'string' || typeof b !== 'string'){
            return 'all parameters must be string';
        }
        console.log(a+b);
        return a + b;
    }
}

module.exports = addTwoStrings;