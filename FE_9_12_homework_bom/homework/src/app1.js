var todoList = [];
let ul = document.getElementById('ul');
let item1 = 'Find a Cat';
let item2 = 'Find another a Cat';
let item3 = 'Find another a Cat 2';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}

let form = document.getElementById('form1');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputText = document.getElementById('addNewForm').value;
    if (!inputText) {
        console.log('empty');
    } else {
        todoList = NewItem(inputText);
        returnPage('#');
    }
});


//Changing page functions
function changePage() {

    let todo = document.getElementById('todo');
    let addNew = document.getElementById('addNew');
    let modifyItem = document.getElementById('modifyItem');
    let x = document.location.href;
    let y = 'file:///D:/courses/FE_9_12_homework_bom/homework/index.html#/modifyItem';
    if (y === x) {
        modifyItem.style.display = 'block';
        todo.style.display = 'none';
        addNew.style.display = 'none';
    } else {
        modifyItem.style.display = 'none';
        todo.style.display = 'none';
        addNew.style.display = 'block';
    }
}

function ChangeHref(x) {
    location.hash = x;
    console.log(x);
}

function returnPage(x) {
    location.href = location.href.substr(0, window.location.href.indexOf(x));
    // console.log( location.href);

}

function NewItem(text) {
    let id = getRandomInt(1, 50000);
    localStorage.setItem(id, text);
    createElement(id);
}

function createElement(id) {

    let text = localStorage.getItem(id);
    let item = document.createElement('li');
    let textPart = document.createElement("p");
    textPart.innerHTML = text;
    alert( textPart.innerHTML);
    // textPart.addEventListener('click', function () {
    //     location.hash = '/modifyItem';
    // });
    // let todoIcon = document.createElement("img");
    // todoIcon.src = './assets/img/todo-s.png';
    // todoIcon.className = 'todoIcon';
    // todoIcon.addEventListener('click', function () {
    //     doneIcon.style.display = 'inline-block';
    //     todoIcon.style.display = 'none';
    // });
    // let doneIcon = document.createElement("img");
    // doneIcon.src = './assets/img/done-s.png';
    // doneIcon.className = 'doneIcon';
    // let removeIcon = document.createElement("img");
    // removeIcon.src = './assets/img/remove-s.jpg';
    // removeIcon.addEventListener('click', function () {
    //     item.remove()
    // });
    // item.appendChild(todoIcon);
    // item.appendChild(doneIcon);
    item.appendChild(textPart);
    // item.appendChild(removeIcon);
    ul.appendChild(item);
}