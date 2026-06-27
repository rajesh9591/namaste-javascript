function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
const result = x();
result();