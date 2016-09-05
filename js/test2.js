define(['test','exports'], function(test, exports){
    var sum = function(a, b){
        return test.add(a,b);
    };
    exports.sum = sum;
//    return {
//        sum: sum
//    }
});