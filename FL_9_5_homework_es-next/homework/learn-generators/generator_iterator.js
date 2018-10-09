function* factorial(n) {
    let fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
        yield fact;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
