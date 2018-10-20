const fs = require('fs');
const path = require('path');
let data;

function readFileAndThen(callback, writeToFileBack = false) {
    data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/data.json'), 'utf8'));

    const fromCallback = callback();

    if (writeToFileBack) {
        fs.writeFileSync(path.join(__dirname, '../../db/data.json'), JSON.stringify(data), 'utf8');
    }
    return fromCallback;
}

function getAllCars() {
    return readFileAndThen(() => {
        return {status: 200, body: data}
    });
}

function createCar(id, brand, model, engineVolume, year) {
    return readFileAndThen(() => {
        let newCar = {
            id: id,
            brand: brand,
            model: model,
            engineVolume: engineVolume,
            year: year
        };
        let car = data.find(function (car) {
            return car.id === newCar.id;
        });
        if (!car) {
            data.push(newCar);
            return {status: 201, body: newCar}
        } else {
            return {status: 409, body: {message: 'Car already exists.'}}
        }
    }, true);
}

function putCarById(id, brand, model, engineVolume, year) {
    return readFileAndThen(() => {
        let car = data.find(function (car) {
            return car.id === Number(id)
        });
        if (car) {
            car.brand = brand;
            car.model = model;
            car.engineVolume = engineVolume;
            car.year = year;
            return {status: 200, body: car}
        } else {
            return {status: 404, body: 'Car with such id has not been found.'}
        }
    }, true);
}

function getCarById(id) {
    return readFileAndThen(() => {
        let car = data.find(function (car) {
            return car.id === Number(id)
        });
        if (car) {
            return ({status: 200, body: car})
        } else {
            return ({status: 404, body: 'Car with such id has not been found.'})
        }
    }, false);
}

function deleteCarById(id) {
    return readFileAndThen(() => {
        let car = data.find(function (car) {
            return car.id === Number(id)
        });
        if (car) {
            data = data.filter(function (cars) {
                return cars.id !== Number(id);
            });
            return {status: 200, body: {message: 'The car has been successfully removed'}}
        } else {
            return {status: 404, body: {message: 'Car with such id has not been found.'}}
        }
    }, true);
}

module.exports = {
    'getAllCars': getAllCars,
    'createCar': createCar,
    'putCarById': putCarById,
    'getCarById': getCarById,
    'deleteCarById': deleteCarById,
};