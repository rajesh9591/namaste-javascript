console.log("Start");

var x = 1;

function a() {
var y = 10;
console.log("Inside A:", y);
}

function b() {
var z = 20;
console.log("Inside B:", z);
}

a();
b();

console.log("Global X:", x);

console.log("End");
