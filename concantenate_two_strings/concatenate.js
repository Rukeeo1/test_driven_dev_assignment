const addTwoStrings = {
    concat: function(a,b){
        if(typeof a !== 'string' || typeof b !== 'string'){
            return 'all parameters must be string';
        }

        if(a == '' || b == ''){
            return 'strings can\'t be empty';
        }
        console.log(a+b);
        return a + b;
    }
}

module.exports = addTwoStrings;