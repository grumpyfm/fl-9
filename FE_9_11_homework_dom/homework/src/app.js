let rootNode = document.getElementById('root');

//Title
let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'TODO Cat list';
rootNode.appendChild(title);

//Form
let divInput = document.createElement('div');
divInput.className = 'input';
rootNode.appendChild(divInput);

let form = document.createElement('form');
form.className = 'form';
divInput.appendChild(form);
let inputMain = document.createElement('input');
inputMain.type = 'text';
inputMain.value = '';
inputMain.id = 'unique';
inputMain.placeholder = 'Add New Action';
form.appendChild(inputMain);


//icon addBox
let addBox = document.createElement('i');
addBox.className = 'material-icons addBox';
addBox.innerHTML = 'add_box';
divInput.appendChild(addBox);
addBox.addEventListener('click', function () {
    let inputText = document.getElementById('unique').value;
    if (!inputText) {
        console.log('empty');
    } else {
        addAction(inputText);

    }
});


let container = document.createElement('div');
container.className = 'container';
rootNode.appendChild(container);


let list1 = 'Find a Cat';
let list2 = "Prepare cat's carry";
let list3 = 'Bathe a cat';

addAction(list1);
addAction(list2);
addAction(list3);


let image = document.createElement('img');
image.setAttribute('src', './assets/img/cat.png');
rootNode.appendChild(image);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputText = document.getElementById('unique').value;
    if (!inputText) {
        console.log('empty');
    } else {
        addAction(inputText);

    }
});



function addAction(x) {

    let maxAmount = 10;
    let divs = document.querySelectorAll('.box');

    if (divs.length < maxAmount) {
        let div = document.createElement('div');
        div.className = 'box';

        container.appendChild(div);


        let iconDone = document.createElement('i');
        iconDone.className = 'material-icons done';
        iconDone.innerHTML = 'done';
        div.appendChild(iconDone);
        iconDone.addEventListener('click', function () {
            iconDone.style.backgroundColor = 'black';
        });
        let list = document.createElement('p');
        list.innerHTML = x;
        div.appendChild(list);
        let iconDel = document.createElement('i');
        iconDel.className = 'material-icons delete';
        iconDel.innerHTML = 'delete';
        div.appendChild(iconDel);
        iconDel.addEventListener('click', function () {
            div.remove()
        });

    } else {
        console.log('10 actions is max');
    }

}
let dragSrcEl = null;

function handleDragStart(e) {
    // Target (this) element is the source node.
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    this.classList.add('dragElem');
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.classList.add('over');

    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {


    if (e.stopPropagation) {
        e.stopPropagation();
    }


    if (dragSrcEl !== this) {

        this.parentNode.removeChild(dragSrcEl);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin',dropHTML);
        let dropElem = this.previousSibling;
        addDnDHandlers(dropElem);

    }
    this.classList.remove('over');
    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    this.classList.remove('over');
}

function addDnDHandlers(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    elem.addEventListener('drop', handleDrop, false);
    elem.addEventListener('dragend', handleDragEnd, false);

}

let cols = document.querySelectorAll('.box');
[].forEach.call(cols, addDnDHandlers);




