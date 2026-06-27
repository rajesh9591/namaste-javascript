function test() {

    var x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const result = test();

result();