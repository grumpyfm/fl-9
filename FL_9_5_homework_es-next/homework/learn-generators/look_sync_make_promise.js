
function askFoo () {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run (generator) {
   let gen = generator();
    gen.next();
}

run(function* () {
    var foo = yield askFoo().then((res) => {
        console.log(res);
    });
    console.log(foo);
});