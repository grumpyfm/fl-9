const ShoppingCart = function (obj) {
    this.name = obj.name;
    this.owner = obj.owner;
    this.maxCount = obj.maxCount;
    let productList = [];
    let formattedListOfProducts = [];
    let _logs = [];
    let dateOfAdding = [];
    let dayCartCreated;

    this.createdCart = function () {
        dayCartCreated = new Date();
        _logs.push(`${this.name} was created in ${dayCartCreated}`)
    };

    this.createdCart();

    this.addNewProduct = function (product) {
        if (typeof product === 'object') {
            productList.push(product);
            let date = new Date();
            dateOfAdding.push(date);
            product.add(this.name);
            _logs.push(`${product.name} is added to ${this.name} on ${date} `);
            return this;
        } else {
            return 'Please try to add Product instance';
        }
    };

    this.removeProduct = function (id) {
        if (id > productList.length || id < 0) {
            return `There is only ${productList.length} products in cart.`
        } else if (typeof id !== 'number') {
            return 'There should be a number';
        } else {
            let date = new Date();
            productList[id].removeProductP('No cart this product places on');
            _logs.push(`${productList[id].name} is removed from ${this.name} on ${date} `);
            productList.splice(id, 1);
        }
    };

    this.getTotalPrice = function () {
        let sum = 0;
        for (let i = 0; i < productList.length; i++) {
            sum = sum + Number(productList[i].price);
        }
        return sum;
    };

    this.getAvaragePrice = function () {
        let sumFunc = this.getTotalPrice();
        return sumFunc / productList.length;

    };

    this.getProducts = function () {
        return productList;
    };

    this.getFormattedListOfProducts = function () {
        for (let i = 0; i < productList.length; i++) {
            formattedListOfProducts.push(`${ productList[i].name} - is on ${this.name} from ${dateOfAdding[i]}
            .Detailed product description:${productList[i].description.color}, ${productList[i].description.size}`);
        }
        return formattedListOfProducts;
    };

    this.getHistory = function () {
        return _logs;
    }

};


const Product = function (json) {
    this.name = json.name;
    this.description = json.description;
    this.price = Number(json.price);
    let cartName;
    let date;
    let _logs = [];

    this.getPrice = function () {
        return this.price;
    };

    this.setPrice = function (newPrice) {
        if (newPrice < this.price) {
            _logs.push(`Try to change price from ${this.price} to ${newPrice}.`);
            return ' You cannot set smaller price than product has now';
        } else if (typeof newPrice !== 'number') {
            return 'Write a number';
        } else {
            _logs.push(`Change price from ${this.price} to ${newPrice}.`);
            this.price = newPrice;
        }
    };

    this.add = function (name) {
        date = new Date();
        _logs.push(`${this.name} was added to ${name} on ${date}`);
        cartName = name;
    };

    this.removeProductP = function (name) {
        date = new Date();
        _logs.push(`${this.name} was removed from ${cartName} on ${date}`);
        cartName = name;
    };

    this.getHistory = function () {
        return _logs;
    };

};


// demonstrates work of all functions
const banana = new Product({
    name: 'banana',
    description: {
        color: 'yellow',
        size: 'medium'
    },
    price: 45
});

const apple = new Product({
    name: 'apple',
    description: {
        color: 'red',
        size: 'small'
    },
    price: 30
});

const peach = new Product({
    name: 'peach',
    description: {
        color: 'orange',
        size: 'medium'
    },
    price: 32
});

const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxSize: 5
});

stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(peach)
    .addNewProduct(banana)
    .addNewProduct(apple)
    .addNewProduct(peach);

stevesShopCart.removeProduct(1);
peach.setPrice(10);
peach.setPrice(53);
console.log('Apple price:', apple.getPrice());
console.log('getProducts:', stevesShopCart.getProducts());
console.log('getFormattedListOfProducts:', stevesShopCart.getFormattedListOfProducts());
console.log('Cart History:', stevesShopCart.getHistory());
console.log('Product History:', peach.getHistory());
console.log('avarage price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());


