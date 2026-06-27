//Q1
// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// const z = x();
// z();

//Q2
// function test() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     }
// }
// const x = test();
// x();
// x();

//Q3
function outer() {
    let a = 100;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()();