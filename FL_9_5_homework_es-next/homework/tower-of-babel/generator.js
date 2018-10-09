const max = process.argv[2];
let range = {
    from: 1,
    to: max
};
let FizzBuzz = function* () {
    let current = this.from;
    let last = this.to;
    yield {
        next() {
            if (current <= last) {
                if (current % 3) {
                    console.log('Fizz');
                } else if (current % 5) {
                    console.log('Buzz');
                } else if (current % 3 && current % 5) {
                    console.log('FizzBuzz');
                }
                return {
                    done: false,
                    value: current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};


for (var n of FizzBuzz) {
    console.log(n);
}