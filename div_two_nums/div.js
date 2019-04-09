//the function should take in two numbers and returns the first divided by the second
const divObj = {
    div: function(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'please ensure both parameters are numbers';
        }
        
        return a/b;
    }
}

console.log(divObj.div(4,3));

module.exports = divObj;