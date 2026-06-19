// var a = 10;
// var b = 20;

// console.log(a);
// //console.log(window.a);

// console.log(this.a);

// // console.log(window === this);
//============================================
// var a = 10;

// console.log(a);

// console.log(this);

// console.log(this.a);

// console.log(global.a);

//============================================

console.log("Start");

var a = 10;

function test() {
    console.log(this);
}

console.log(window === this);

test();

console.log("End");
