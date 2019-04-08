const indefiniteObj = {
    sumEveryThing: function(){
        var s = 0;
        for (var i=0; i < arguments.length; i++) {
            s += arguments[i];
        }
            if(typeof s !== 'number'){
                return 'please ensure all parameter\'s are numbers';
            }else{
                return s;
            }
        }
}

console.log(indefiniteObj.sumEveryThing(1,2,3,4));
module.exports = indefiniteObj;