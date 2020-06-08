
// 3.ES6语法找最小值
var arr = [12,34,32,89,4];
console.log( Math.min(...arr)); // 4


// 9.promise改进
function fn(data) {
    var p = new Promise(
        function (resolve, reject) {
            resolve(data);
        }
    )
    return p;
}

var promise = Promise.all([
    fn('hello'),
    fn('lagou'),
    fn('!!'),
]);
promise.then(function(v) {
    console.log(v.join('')); // hellolagou!!
})

