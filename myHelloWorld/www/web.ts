
import { sample } from 'samplePlugin';


sample.echo({value: 'Uday'}).then(response => {
    console.log(response);
});
console.log("inside web.ts");
// const container = document.getElementById('main-title');
// sample.echo({value: 'Uday'}).then(response => {
//     if(container) {
//    container.innerHTML = response.value;
//     }
// });
const button = document.getElementById('go');
if (button != undefined) {
button.addEventListener('click', handleButtonClick);
}
function handleButtonClick() {
   // Call the function defined in web.ts
   sample.echo({value: 'Button clicked!'}).then(response => {
      console.log(response);
      const container = document.getElementById('main-title');
      if(container != undefined) {
         container.innerHTML = response.value;
      }
   });
 }
 export {};