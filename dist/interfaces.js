"use strict";
function createVehicle(vehicle) {
    console.log(`Vehicle Details: Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
}
function updatePerson(config) {
    let newPerson = { firstName: 'mat', lastName: 'rix', age: 22, email: 'matriix@sqli.com' };
    if (config.age) {
        newPerson.age = config.age;
    }
    if (config.email) {
        newPerson.email = config.email;
    }
    return newPerson;
}
function moveCircle(circle, newX, newY) {
    return {
        centerX: circle.centerX + newX,
        centerY: circle.centerY + newY,
        radius: circle.radius
    };
}
// classes
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(theName) {
        super(theName);
    }
}
class Person {
    constructor(name) { this.name = name; }
}
//Generics
function identity(arg) {
    return typeof (arg);
}
function GenericIdentityFn(arg) {
    return arg;
}
// Enums
var Responsee;
(function (Responsee) {
    Responsee[Responsee["No"] = 0] = "No";
    Responsee[Responsee["Yes"] = 1] = "Yes";
})(Responsee || (Responsee = {}));
var Message;
(function (Message) {
    Message["success"] = "SUCCESS";
    Message["failure"] = "FAILURE";
})(Message || (Message = {}));
//# sourceMappingURL=interfaces.js.map