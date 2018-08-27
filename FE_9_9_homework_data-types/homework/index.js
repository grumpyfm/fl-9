//#1 type of passed parameter
function findType(x) {
    if (x === 'false' || x === 'true') {
        return 'boolean';
    } else if (x === 'null') {
        return 'object';
    } else if (!Number.isNaN(Number(x))) {
        return 'number';
    } else {
        return 'string';
    }
}

// #2 type of passed parameter
function forEach(arr, some) {

    arr.forEach(some);
    return arr;
}

//#3 returns transformed array
function map(num, index, arr) {
    let cf = 3;
    arr[index] = num + cf;
    return arr;
}

//#4
function filter(num, index, arr) {
    let cf = 3;
    let one = 1;
    if (num < cf) {
        let x = arr.indexOf(num);
        arr.splice(x, one);
    }
    return arr;
}


//#5
function getAdultAppleLovers(item, i, arr) {
    if (arr[i]['age'] > 18 && arr[i].favoriteFruit === 'apple') {
        let ar2 = [];
        ar2.push(arr[i].name);
        console.log(ar2);
    }

}

//#6 returns array of keys
function keys(arr) {
    return Object.keys(arr);
}

//#7 returns array of values
function values(arr) {
    return Object.values(arr);
}

//#8 formatted date
function showFormattedDate(date) {
    let months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return 'It is ' + day + ' of ' + months[month] + ', ' + year;
}