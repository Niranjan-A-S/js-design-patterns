class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log('Bow');
    }
}

const dog1 = new Dog("Daisy");

// we can add extra properties to the prototype
Dog.prototype.walk = function () {
    console.log(this.name + ' is walking');
};
// dog1.walk();

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }
    fly() {
        console.log('Bow and Fly');
    }
}

const dog2 = new SuperDog("Daisy");
dog2.bark();
dog2.fly();

//using object.create
const pet = Object.create(dog2);
pet.walk();
pet.bark();
pet.fly();