function logged(constructor: Function) {
    console.log(`Creating new instance of ${(constructor as any).name}`);
}

//@ts-ignore
@logged
class Example {
    constructor() {
        console.log('Example instance created');
    }
}

const example = new Example();

function format(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function() {
            const result = originalMethod.apply(this);
            return value ? result.toUpperCase() : result;
        };
    };
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    //@ts-ignore
    @format(true) // Apply format decorator with value true
    greet() {
        return "Hello, " + this.greeting;
    }
}

const greeter = new Greeter("World");
console.log(greeter.greet());