console.log("Start");
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const count = createCounter();
count();
count();
count();
console.log("End");