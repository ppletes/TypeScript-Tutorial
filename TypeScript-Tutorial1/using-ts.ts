const button = document.querySelector("button");
/* NOT WORKING IN VANILLA JS
"!" tells that this will always find an element (it will never be NULL) 
"as HTMLInputElement" tells that this will be always an input element
*/
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
