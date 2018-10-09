function victimDataSource(name) {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };
    return new Promise((resolve, reject) =>{
        setTimeout(() => victimsByName.hasOwnProperty(name) ?
            resolve(victimsByName[name]) : reject(' Unhandled Promise rejection: unknown victim'), 1000);
    })
}

function crimeDataSource(surname) {
    return new Promise( (resolve, reject) => {
        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };
        setTimeout(() => crimeBySurname.hasOwnProperty(surname) ?
            resolve(crimeBySurname[surname]) : reject('unknown surname'), 500);

    });
}

const loadVictimData = (victimName) => {

    return new Promise((resolve) => {
        victimDataSource(victimName).then((result) => {
            let {name, surname, jobTitle, age} = result;
            crimeDataSource(surname).then((result) => {
                let {title, place} = result;
                resolve(`${name} ${surname} (${jobTitle}, ${age}) suffered from ${title} in ${place}`);
            });
        }).catch((e) => {
            console.log(e);
        })
    })


};

// /**
//  * Output: John Doe(Victim, 99) suffered from dank memes in 9 gag.
//  */
loadVictimData('John').then(msg => console.log(msg));
// /**
//  * Output: Jennifer Nicker(Artist, 21) suffered from robbery in NYC.
//  */
loadVictimData('Jennifer').then(msg => console.log(msg));
// /**
//  * Output: Unhandled Promise rejection: unknown victim
//  * or familiar error msg
//  */
loadVictimData('Jss').then(msg => console.log(msg));



