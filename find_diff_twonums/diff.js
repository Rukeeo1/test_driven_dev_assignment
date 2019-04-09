//Takes two numbers as argument and return the difference between the numbers
const diffObj = {
    diff: function(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'all parameter\'s must be numbers'
        }
        let x = a - b;
        console.log(x)
        if(Number.isInteger(x)){
            return x;
        }else{
            return Number(x.toFixed(2));
        }
    }
}

console.log(diffObj.diff(2,{}));

module.exports = diffObj;