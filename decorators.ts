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
