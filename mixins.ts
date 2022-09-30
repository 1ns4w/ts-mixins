// superclasses
class Pet { constructor(public petName: string) {} }

// mixins
const Swimmer = (superclass: any) => class extends superclass { 
    constructor(...args: any[]) { super(...args); }
    swim() { console.log(`Swimming`); } 
} 

const Walker = (superclass: any) => class extends superclass { 
    constructor(...args: any[]) { super(...args); }
    walk() { console.log(`Walking`); } 
}

// compound mixins
const SwimmerAndWalker = (superclass: any) => Swimmer(Walker(superclass));

// pet subclasses
class Fish extends Swimmer(Pet) { 
    constructor(petName: string, public swimSpeed: number) { super(petName); }
    fishAttack() { console.log(`Fish attack`); }
}

class Turtle extends SwimmerAndWalker(Pet) {
    constructor(petName: string, public numberOfLegs: number) { super(petName); }
    turtleAttack() { console.log(`Turtle attack`); }
}

// usage
const turtle = new Turtle("Turtle", 4);
turtle.swim(); // inherited method
turtle.turtleAttack(); // class method