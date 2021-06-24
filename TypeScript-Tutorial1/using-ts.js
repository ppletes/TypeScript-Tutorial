var button = document.querySelector("button");
/* NOT WORKING IN VANILLA JS
"!" tells that this will always find an element (it will never be NULL)
"as HTMLInputElement" tells that this will be always an input element
*/
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
