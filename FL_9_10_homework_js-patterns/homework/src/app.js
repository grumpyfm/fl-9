class Store {
    constructor() {
        this.price = 20;
        this.nightDiscount = 0;
        this.weekendDiscount = 0;
        this.toPay = 0;
        this.bonus = 0;
    }

    count() {
        this.toPay = this.price - this.nightDiscount - this.weekendDiscount;
    }

    buyPizzaSlice() {
        return `Price after discount is ${this.toPay} and you have ${this.bonus} bonuses`;
    }
}

const getDiscount = obj => {
    let data = new Date();
    if (data.getHours() <= 6 || data.getHours() === 23) {
        obj.nightDiscount = 5;
    }
    if (data.getDay() === 0 || data.getDay() === 6) {
        obj.weekendDiscount = 2;
    }
    obj.count();
};

const setBonus = obj => {
    obj.bonus = obj.bonus + Math.floor(obj.toPay / 10);
};

const test = new Store();
getDiscount(test);
setBonus(test);
console.log(test.buyPizzaSlice());
