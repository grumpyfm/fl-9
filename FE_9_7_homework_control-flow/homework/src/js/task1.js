let login = prompt('Enter your login: ');
let password;

if (login === 'User') {
    passwordEnter();
} else if (!login) {
    alert('Canceled');
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else {
    alert('I don’t know you');
}

function passwordEnter() {
    password = prompt('Enter your password: ');
    if (password === 'SuperUser') {
        hours();
    } else if (!password) {
        alert('Canceled password');
    } else {
        alert('Wrong password');
    }
}


function hours() {
    let d = new Date();
    let h = d.getHours();

    if (h < 20) {
        alert('Good day!”  ');
    } else {
        alert('Good evening!');
    }

}