//Takes two numbers as argument and return the difference between the numbers
const diffObj = {
    diff: function(a,b){
        if(typeof a !== 'number' && typeof b !== 'number'){
            return 'all parameter\'s must be numbers'
        }
        let x = a - b;
        console.log(x)
        return x;
    }
}

module.exports = diffObj;