var x = 100;
function a() {
    var y = 20;
    function b() {
        var z = 30;
        console.log(x);
        console.log(y);
        console.log(z);
    }
    b();
}
a();