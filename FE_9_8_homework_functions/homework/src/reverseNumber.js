function reverseNumber(d) {
    let number;

    if (d < 0) {
        d = Math.abs(d);
        d = d + '';
        number = d.split('').reverse().join('');
        number = '-' + number;
    } else {
        d = d + '';
        number = d.split('').reverse().join('');
    }
    return number;
}