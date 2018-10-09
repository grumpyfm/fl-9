var inputs = process.argv.slice(2);
var result = inputs.map((input) => {
        let res = input.split('');
        return res[0];
    }
)
    .reduce((sum, current) => {
        return sum + current;
    });
console.log(result);

// For example, in case of ["Hello", "Arrow", "Function"] should result in "HAF". Here is a full example: