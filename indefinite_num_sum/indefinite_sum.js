const indefiniteObj = {
    sumEveryThing: function(){
        var s = 0;
        for (var i=0; i < arguments.length; i++) {
            s += arguments[i];
        }
        return s;
        }
}

console.log(indefiniteObj.sumEveryThing(1,2,3,4));
module.exports = indefiniteObj;