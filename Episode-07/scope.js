console.log("Start");
var a = 10;
function first() {
    var b = 20;
    function second() {
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    second();
}
first();
console.log("End");