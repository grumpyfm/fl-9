let a = Number(prompt('Enter a length of a triangle:'));
let b = Number(prompt('Enter b length of a triangle:'));
let deg = Number(prompt('Enter the angle between:'));
let rad = radToRad();
let S;
let c;
let c2;
let P;
let output;
let space=4;

if (a > 0 && b > 0 && deg > 0) {
    c2 = Math.pow(a, 2) + Math.pow(b, 2) - a * b * Math.cos(rad);
    c = Math.sqrt(c2);
    if (Math.round(c) !== c) {
        c = c.toFixed(2);
    } else {
        c = Math.round(c);
    }
    S = Math.sin(rad) * a * b / 2;
    if (Math.round(S) !== S) {
        S = S.toFixed(2);
    } else {
        S = Math.round(S);
    }
    P = a + b + Number(c);
    if (Math.round(P) !== P) {
        P = P.toFixed(2);
    } else {
        P = Math.round(P);
    }
    let object = {
        'c length ': c,
        'Triangle square ': S,
        'Triangle perimeter ': P
    };
    output = JSON.stringify(object, null, space);
} else {
    output = 'Invalid data';
}

console.log(output);

function radToRad() {
    let halfRound = 180;
    return deg * (Math.PI / halfRound);
}