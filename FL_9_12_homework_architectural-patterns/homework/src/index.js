import {createStore} from 'redux';
import {date} from "./data";
import {styles} from './style.scss'

let defaultState = date;
let displayInfo = document.getElementById('displayInfo');
let searchInput = document.getElementById('searchInput');
let count = 0;
let employeesTable = document.getElementById('employeesTable');

//Reducer

function reducer(currentState, action) {

    switch (action.type) {
        case 'ADD':
            createNewElements(defaultState);
            break;
        case 'DEL':
        case 'FIND':
            console.log(searchInput.value);
            console.log(filter(defaultState, searchInput.value));
            return 'df';
        default:
            return currentState;
    }
}

const store = createStore(reducer, defaultState);
store.subscribe(render);

function render() {
    console.log('in render');
    displayInfo.innerHTML = `Display ${count} users out of ${defaultState.length}`
}

//Actions
let loadMoreButton = document.getElementById('loadMoreButton');
loadMoreButton.addEventListener('click', function () {
    store.dispatch({type: 'ADD'})
});

searchInput.addEventListener('change', function (e,) {
    e.preventDefault();
    store.dispatch({type: 'FIND'})
});

function filter(obj, name) {
    let res = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].name === name) {
            res.push(obj[i]);
        }
    }
    return res;
}


function createNewElements(curState) {
    if (count < curState.length) {
        let till = count + 5;
        for (count; count < till; count++) {
            let row = document.createElement('tr');
            employeesTable.appendChild(row);

            let columnPhoto = document.createElement('td');
            let img = document.createElement('img');
            img.src = curState[count].picture;
            columnPhoto.appendChild(img);

            let columnName = document.createElement('td');
            columnName.innerHTML = curState[count].name;

            let columnAddress = document.createElement('td');
            columnAddress.innerHTML = curState[count].location;

            let columnEmail = document.createElement('td');
            columnEmail.innerHTML = curState[count].email;

            let columnPhone = document.createElement('td');
            columnPhone.innerHTML = curState[count].phone;

            let columnTimezone = document.createElement('td');
            columnTimezone.innerHTML = curState[count].timezone;

            let columnActions = document.createElement('td');
            let removeButton = document.createElement('button');
            removeButton.innerHTML = 'Remove';
            removeButton.className = 'removeButton';
            removeButton.addEventListener('click', function () {
                store.dispatch({type: 'DEL'})
            });
            columnActions.appendChild(removeButton);

            row.appendChild(columnPhoto);
            row.appendChild(columnName);
            row.appendChild(columnAddress);
            row.appendChild(columnEmail);
            row.appendChild(columnPhone);
            row.appendChild(columnTimezone);
            row.appendChild(columnActions);
        }
    }
}


// ** Here you can pass store down to your components
// ** and initialize them, like in example below

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()
