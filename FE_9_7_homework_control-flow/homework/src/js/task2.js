function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    let plus1 = 1;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + plus1)) + min;
}

let play = confirm('Do you want to play a game?');
if (play === true) {
    startGame();
} else {
    alert('You did not become a millionaire, but can.');
}


function startGame() {
    let one = 1;
    let sum = 0;
    let prize1 = 10;
    let prize2 = 5;
    let prize3 = 2;
    let x = 5;
    let cont;
    let number = getRandomIntInclusive(0, x);

    console.log(number);
    for (let i = 0; i < 3; i++) {
        // let object={
        //     'Enter a number from 0 to ':x,
        //     'Attempts left: ':3-i,
        //     'Total prize ':sum,
        // };
        let userNumber = Number(prompt('Enter a number'));
        if (number === userNumber) {
            if (i === 0) {
                sum = prize1;
                cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                if (cont === true) {
                    keepPlaying();
                } else {
                    alert('Thank you for a game. Your prize is: ' + sum + '$.');
                }
                break;
            } else if (i === one) {
                sum = prize2;
                cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                if (cont === true) {
                    keepPlaying();
                } else {
                    alert('Thank you for a game. Your prize is: ' + sum + '$.');
                }
                break;
            } else {
                sum = prize3;
                cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                if (cont === true) {
                    keepPlaying();
                } else {
                    alert('Thank you for a game. Your prize is: ' + sum + '$.');
                }
                break;
            }
        } else {
            if (i === 2) {
                alert('Thank you for a game. Your prize is: ' + sum + '$.');
                let oneMore = confirm('Do you want to play again?');
                if (oneMore === true) {
                    startGame();
                } else {
                    alert('Ok');
                }

            }
        }

    }

    function keepPlaying() {

        x = x * 2;
        prize1 = prize1 * 3;
        prize2 = prize2 * 3;
        prize3 = prize3 * 3;
        let number = getRandomIntInclusive(0, x);
        console.log(number);
        for (let i = 0; i < 3; i++) {
            let userNumber = Number(prompt('Enter a number'));
            if (number === userNumber) {
                if (i === 0) {
                    sum = sum + prize1;
                    cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                    if (cont === true) {
                        keepPlaying();
                    } else {
                        alert('Thank you for a game. Your prize is: ' + sum + '$.');
                    }
                    break;
                } else if (i === one) {
                    sum = sum + prize2;
                    cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                    if (cont === true) {
                        keepPlaying();
                    } else {
                        alert('Thank you for a game. Your prize is: ' + sum + '$.');
                    }
                    break;
                } else {
                    sum = sum + prize3;
                    cont = confirm('Congratulation! Your prize is: ' + sum + '$. Do you want to continue?');
                    if (cont === true) {
                        keepPlaying();
                    } else {
                        alert('Thank you for a game. Your prize is: ' + sum + '$.');
                    }
                    break;
                }
            } else {
                if (i === 2) {
                    alert('Thank you for a game. Your prize is: ' + sum + '$.');
                    let oneMore = confirm('Do you want to play again?');
                    if (oneMore === true) {
                        startGame();
                    } else {
                        alert('Ok');
                    }
                }

            }

        }

    }
}

