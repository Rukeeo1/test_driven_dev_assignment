const multiplyObj = {
    multiply: function(){
        let storage = 1
        for(let i = 0; i<arguments.length;i++){
            storage *= arguments[i];
        }

        if(isNaN(storage)){
            return 'please ensure all arguments passed in are numbers';
        }
        return storage;
    }
}

console.log(multiplyObj.multiply(2,2,3,'s'));

module.exports = multiplyObj;