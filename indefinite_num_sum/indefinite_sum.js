const indefiniteObj = {
    sumEveryThing: function(){
        var s = 0;
        for (var i=0; i < arguments.length; i++) {
            s += arguments[i];
        }
            if(typeof s !== 'number'){
                console.log(s);
                return 'please ensure all parameter\'s are numbers';
            }else{
                console.log(s);
                return s;
            }
        }
}



module.exports = indefiniteObj;