"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var samplePlugin_1 = require("samplePlugin");
samplePlugin_1.sample.echo({ value: 'Uday' }).then(function (response) {
    console.log(response);
});
console.log("inside web.ts");
// const container = document.getElementById('main-title');
// sample.echo({value: 'Uday'}).then(response => {
//     if(container) {
//    container.innerHTML = response.value;
//     }
// });
var button = document.getElementById('go');
if (button != undefined) {
    button.addEventListener('click', handleButtonClick);
}
function handleButtonClick() {
    // Call the function defined in web.ts
    samplePlugin_1.sample.echo({ value: 'Button clicked!' }).then(function (response) {
        console.log(response);
        var container = document.getElementById('main-title');
        if (container != undefined) {
            container.innerHTML = response.value;
        }
    });
}
