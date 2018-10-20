let data = require('../../db/data');

function getAllCars(){
    return {status:200,message:data}
}

function createCar(id, brand, model, engineVolume, year) {
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
        return {status:200,message:newCar}
    } else {
        return {status:409,message:'Car already exists.'}
    }
}

function putCarById(id, brand, model, engineVolume, year) {
    let car = data.find(function (car) {
        return car.id === Number(id)
    });
    if (car) {
        car.brand = brand;
        car.model = model;
        car.engineVolume =engineVolume;
        car.year = year;
        return {status:200,message:car}
    } else {
        return {status:404,message:'Car with such id has not been found.'}
    }
}

function getCarById(id) {
    let car = data.find(function (car) {
        return car.id === Number(id)
    });

    if (car) {
        return ({status:200,message:car})
    } else {
        return ({status:404,message:'Car with such id has not been found.'})
    }
}

function deleteCarById(id) {
    let car = data.find(function (car) {
        return car.id === Number(id)
    });
    if (car) {
        data = data.filter(function (cars) {
            return cars.id !== Number(id);
        });
        return {status:200,message:'The car has been successfully removed.'}
    } else {
        return {status:404,message:'Car with such id has not been found.'}
    }
}

module.exports = {
    'getAllCars':getAllCars,
    'createCar': createCar,
    'putCarById': putCarById,
    'getCarById': getCarById,
    'deleteCarById': deleteCarById,
};
