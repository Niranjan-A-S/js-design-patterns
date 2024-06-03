// A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance.We can’t use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const animalFunctionality = {
    walk() {
        console.log(`${this.name} is walking`)
    },
    eat() {
        console.log(`${this.name} is eating`)
    }
}

const dogFunctionality = {
    bark() {
        console.log(`${this.name} is Barking!!`);
    },
    wagTail() {
        console.log(`${this.name} is Wagging Tail!!`);
    },
    play() {
        console.log(`${this.name} is Playing!!`);
    },
    walk() {
        super.walk();
    },
    eat() {
        super.eat();
    }
};

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);
const sara = new Dog('Sara');
console.log(sara.bark())
console.log(sara.play())
console.log(sara.walk())