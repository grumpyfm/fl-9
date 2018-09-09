const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

let ul = document.getElementById('ul');
let list1 = 'Find a Cat';
let list2 = 'Find another a Cat';
let list3 = 'Find another a Cat 2';

createElement(list1);
createElement(list2);
createElement(list3);

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

let form = document.getElementById('form1');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputText = document.getElementById('addNewForm').value;
    if (!inputText) {
        console.log('empty');
    } else {
        createElement(inputText);
        returnPage('#');
    }
});

function ChangeHref(x) {
    location.hash = x;
    console.log(x);
}

function returnPage(x) {
    location.href = location.href.substr(0, window.location.href.indexOf(x));
    // console.log('returnPage');
    // console.log( location.href);

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення

}

function createElement(text) {

    let item = document.createElement('li');
    let textPart = document.createElement('p');
    textPart.innerHTML = text;
    textPart.addEventListener('click', function () {
        location.hash = '/modifyItem';

    });
    let todoIcon = document.createElement('img');
    todoIcon.src = './assets/img/todo-s.png';
    todoIcon.className = 'todoIcon';
    todoIcon.addEventListener('click', function () {
        doneIcon.style.display = 'inline-block';
        todoIcon.style.display = 'none';
    });
    let doneIcon = document.createElement('img');
    doneIcon.src = './assets/img/done-s.png';
    doneIcon.className = 'doneIcon';
    let removeIcon = document.createElement('img');
    removeIcon.src = './assets/img/remove-s.jpg';
    removeIcon.addEventListener('click', function () {
        item.remove()
    });
    item.appendChild(todoIcon);
    item.appendChild(doneIcon);
    item.appendChild(textPart);
    item.appendChild(removeIcon);
    ul.appendChild(item);

}
