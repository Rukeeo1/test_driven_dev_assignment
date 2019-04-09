const multiplyObj = {
    multiply: function(){
        let storage = 1
        for(let i = 0; i<arguments.length;i++){
            storage *= arguments[i];
        }

        return storage;
    }
}

console.log(multiplyObj.multiply(2,2,3,'s'));

module.exports = multiplyObj;