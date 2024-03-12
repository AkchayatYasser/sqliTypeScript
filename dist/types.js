"use strict";
let temperature = 38;
let welcomeMessage = "Welcome to the TypeScript!";
let isLoggedIn = true;
let colors = ["Red", "Green", "Blue"];
let userInfo = ["Matriix", 25];
var season;
(function (season) {
    season[season["Winter"] = 0] = "Winter";
    season[season["Spring"] = 1] = "Spring";
    season[season["Summer"] = 2] = "Summer";
    season[season["Autumn"] = 3] = "Autumn";
})(season || (season = {}));
;
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("No return");
}
//# sourceMappingURL=types.js.map