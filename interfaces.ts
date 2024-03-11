interface vehicle {
    make: string;
    model: string;
    year?: number;
}

function createVehicle(vehicle: vehicle): void {
    console.log(`Vehicle Details: Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
}

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
}

function updatePerson(config: Person): {age: number, email: string} {
    let newPerson = {firstName: 'mat', lastName: 'rix', age: 22, email: 'matriix@sqli.com'};
    if(config.age) {
        newPerson.age = config.age;
    }
    if(config.email) {
        newPerson.email = config.email;
    }
    return newPerson;
}

interface circle{
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle (circle: circle, newX: number, newY: number): circle {
    return {
        centerX: circle.centerX + newX,
        centerY: circle.centerY + newY,
        radius: circle.radius
    };
}

// classes

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(theName: string) {
        super(theName);
      }
}

class Person {
    public  name: string;
    constructor(name: string) { this.name = name; }
}

//Generics
function identity<T>(arg: T): string {
    return typeof(arg);
}

interface GenericIdentityFn<T> {
    (arg: T): T;
}
function GenericIdentityFn<T>(arg: T): T {
    return arg;
}

interface GenericArray<T> {
    items: T[];
}

// Enums
enum Responsee {
    No = 0,
    Yes = 1,
}
enum Message {
    success = "SUCCESS",
    failure = "FAILURE",
}

