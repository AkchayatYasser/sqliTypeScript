function greet(name: string) {
    return "Hello, " + name;
}
function multiply(a: number, b: number) {
    return a * b;
}

function createEmail(to: string, subject?: string): string {
    if(!subject) subject = "No Subject";
    return `Email to ${to}, Subject: ${subject}`;
}

function add(x: number, y: number, z?: number): number {
    if(z) return x + y + z;
    else return x + y;
}
function concatenateStrings(...text: string[]): string {
    return text.join(", ");
}
function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}



