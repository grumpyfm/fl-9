//Task 1
let assign = function (assignedObj, ...objects) {
    for (let i = 1; i < objects.length; i++) {
        let obj = objects[i];
        if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                if (assignedObj[key] !== obj[key]) {
                    assignedObj[key] = obj[key];
                }

            }
        }
    }
    return assignedObj;
};


//Task 2
const Bot = function (obj) {
    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.defaultSpeed = obj.speed;
    this.type = 'Bot';
};
Bot.prototype = {
    getSpeed() {
        return this.speed;
    },
    setSpeed(num) {
        this.speed = num;
    },
    getDefaultSpeed() {
        this.speed = this.defaultSpeed;
    },
    getCoordinates() {
        let coordinates = {};
        coordinates[this.x] = this.y;
        return coordinates;

    },
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
        this.getCoordinates();
    },
    move(direction) {
        if (direction === 'up') {
            this.y = this.y + this.speed;
        } else if (direction === 'down') {
            this.y = this.y - this.speed;
        } else if (direction === 'left') {
            this.x = this.x - this.speed;
        } else if (direction === 'right') {
            this.x = this.x + this.speed;
        } else {
            return 'Direction is specified badly ';
        }
    },
    showPosition() {
        return `I am ${this.type} '${this.name}'. I am located at ${this.x}:${this.y}.`
    }
};

const Racebot = function (obj) {
    this.privStep = null;
    Bot.call(this, obj);
    this.type = 'Racebot';
};

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.move = function (direction) {
    if (this.privStep === direction) {
        this.speed++
    } else {
        this.speed = this.defaultSpeed;
    }
    this.privStep = direction;
    return Bot.prototype.move.call(this, direction);

};

const Speedbot = function (obj) {
    Bot.call(this, obj);
    this.type = 'Speedbot';
};
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
    this.speed = this.speed + 2;

};
Speedbot.prototype.move = function (direction) {

    Bot.prototype.move.call(this, direction);
    if (this.speed > this.defaultSpeed) {
        this.speed--;
    }
};

