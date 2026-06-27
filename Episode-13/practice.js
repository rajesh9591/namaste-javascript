function sayHello() {
    return "Hello";
}
function execute(fn) {
    console.log(fn());
}
execute(sayHello);