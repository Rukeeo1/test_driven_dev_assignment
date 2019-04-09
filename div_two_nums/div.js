//the function should take in two numbers and returns the first divided by the second
const divObj = {
    div: function(a,b){
        if(typeof a !== 'number' || typeof b !== 'number'){
            return 'please ensure both parameters are numbers';
        }

        let c = a/b;

        if(Number.isInteger(c)){
            console.log(c)
            return c;
        }else{
            console.log(c.toFixed(2))
            return Number(c.toFixed(2));
        }
    }
}

console.log(divObj.div(4,03));

module.exports = divObj;