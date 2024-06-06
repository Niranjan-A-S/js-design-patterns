let count = 0;
let instance;

class Counter {
    constructor() {
        if (instance) throw new Error('You can\'t create multiple instances of this class');
        instance = this;
    }
    getInstance() {
        return this;
    }

    getCount() {
        return count;
    }

    increment() {
        return ++count;
    }

    decrement() {
        return --count;
    }
}

module.exports = Object.freeze(new Counter());