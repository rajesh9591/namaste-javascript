// Q1
var a = 10;
function x() {
    console.log(a);
}
x();

//Q2
function outer() {
    var b = 20;
    function inner() {
        console.log(b);
    }
    inner();
}
outer();

//Q3
function a() {
    var x = 100;
}
console.log(x);