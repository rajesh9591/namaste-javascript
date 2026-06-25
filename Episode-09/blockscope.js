console.log("Start");
let x = 1;
{
    let x = 10;
    {
        let x = 100;
        console.log(x);
    }
    console.log(x);
}
console.log(x);
console.log("End");