//#1
function findType(x) {
    return typeof x;
}


//#2
function forEach(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i]));
    }
    return res;
}


//#3
function map(array, func) {
    return forEach(array, func);
}
// console.log(map(arr1, x=>x+3));



//#4
function filter(array, func) {
    let res = [];

    let passedFilter = forEach(array, func);

    for (let i = 0; i < array.length; i++) {
        if (passedFilter[i] === true) {
            res.push(array[i]);
        }
    }

    return res;
}


//#5
function getAdultAppleLovers(x) {
    let num=18;
    return x.age > num && x.favoriteFruit=== 'apple';
}
function getName(person) {
    return person.name;
}

// let res=filter(data,getAdultAppleLovers);
// console.log(map(res,getName));



//#6
function keys(arr) {
    let res = [];
    for (let key in arr) {
        if (arr.hasOwnProperty(key)) {
            res.push(key);
        }
    }
    return res;
}


// //#7
function values(arr) {
    let res = [];
    for (let key in arr) {
        if (arr.hasOwnProperty(key)) {
            res.push(arr[key]);
        }
    }
    return res;
}


//#8
function showFormattedDate(date) {
    let months = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul','Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return 'It is ' + day + ' of ' + months[month] + ', ' + year;
}
