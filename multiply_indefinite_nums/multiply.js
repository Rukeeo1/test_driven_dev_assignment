const multiplyObj = {
    multiply: function(){
        let storage = 1
        for(let i = 0; i<arguments.length;i++){
            storage *= arguments[i];
        }

        if(isNaN(storage)){
            console.log(storage)
            return 'please ensure all arguments passed in are numbers';
        }
        console.log(storage);
        return storage;
    }
}

// console.log(multiplyObj.multiply(4,0.5,0.32));

module.exports = multiplyObj;