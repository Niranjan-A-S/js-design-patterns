//We can decouple objects that execute a certain task from the object that calls the method.

class _OrderManager {
    constructor() {
        this.orders = [];
    }

    placeOrder({ order, id }) {
        this.orders.push({ order, id });
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes.`
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
        return `You have canceled your order ${id}`
    }
}

const _manager = new _OrderManager();


_manager.placeOrder({ order: "Pad Thai", id: "1234" });
_manager.trackOrder("1234");
_manager.cancelOrder("1234");


/*
    However, there are downsides to invoking the methods directly on the manager instance. It could happen that we decide to rename certain methods later on, or the functionality of the methods change.

    Say that instead of calling it placeOrder, we now rename it to addOrder! This would mean that we would have to make sure that we don’t call the placeOrder method anywhere in our codebase, which could be very tricky in larger applications. Instead, we want to decouple the methods from the manager object, and create separate command functions for each command!
*/

class OrderManager {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args);
    }
}


class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

function placeOrderCommand({ order, id }) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    })
}

function trackOrderCommand(id) {
    return new Command(() => {
        return `Your order ${id} will arrive in 20 minutes.`
    });
}

function cancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter(order => order.id !== id);
        return `You have canceled your order ${id}`
    });
}

const manager = new OrderManager();

console.log(
    manager.execute(placeOrderCommand({ order: "Pad Thai", id: "1234" })),
    manager.execute(trackOrderCommand('1234')),
    manager.execute(cancelOrderCommand('1234'))
)


