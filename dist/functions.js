"use strict";
function greet(name) {
    return "Hello, " + name;
}
function multiply(a, b) {
    return a * b;
}
function createEmail(to, subject) {
    if (!subject)
        subject = "No Subject";
    return `Email to ${to}, Subject: ${subject}`;
}
function add(x, y, z) {
    if (z)
        return x + y + z;
    else
        return x + y;
}
function concatenateStrings(...text) {
    return text.join(", ");
}
function maxNumber(...numbers) {
    return Math.max(...numbers);
}
//# sourceMappingURL=functions.js.map