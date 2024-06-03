//The mediator pattern makes it possible for components to interact with each other through a central point: the mediator. Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript, the mediator is often nothing more than an object literal or a function.

class Chatroom {
    logMessages(user, message) {
        const date = new Date().toLocaleTimeString();
        const name = user.getName();
        console.log(`[${date}] ${name}: ${message}`);
    }
}

class User {
    constructor(name) {
        Object.assign(this, { name, chatroom: new Chatroom() })
    }

    getName() {
        return this.name;
    }

    sendMessage(message) {
        this.chatroom.logMessages(this, message);
    }
}

const user1 = new User('Niranjan');
const user2 = new User('Chetan');
user1.sendMessage('Hello');
user2.sendMessage('Hello');