// Stategy pattern is a way encapsulate different algorithom and realtime practically use same code to the senarios.

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suv extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new Suv(4, "V8", 'red');

console.log(civic);
console.log(cx5);
