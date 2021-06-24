//const userName = "Max";
// const is variable that can not be changed .. ex. userName="Maxy"; will throw an Error

// let age = 30;
// //let is variable that can be change ex.:
// age = 29;

//var we shouldn't use - scope in which is value available
/* EX.
function add(a: number, b: number) {
  var result;
  result = a + b;
  return result;
}

console.log(result); - thrown Error because result is available only inside of function; if I use "let" instead "var", this example would work
*/
/* EX1.
var result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

console.log(result); - won't thrown Error because result is defined in global scope
*/

/* EX2.
if (age > 20) {
  var isOld = true;
}
console.log(isOld); - throw Error - doesn't wotk in ts but it would work in js - solution is to use "let"
*/

//default argument needs to be last
// const add = (a: number, b: number = 1) => {
//   return a + b;
// };

/* For one expression (need to write type assignment):
const add = (a: number, b: number) => a + b;
*/

// console.log(add(2));

// const printOutput = (output: string | number) => {
//   console.log(output);
// };

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5, 2));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies); //OR const activeHobbies = ["Hiking", ...hobbies];

const person = {
  firstName: "Maxi",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies; //destructuring array; "remainingHobbies" if we have more than two elements in array (new hobbies are merged in a new array named remainingHobbies)
console.log(hobbies, hobby1, hobby2);

//const { firstName, age } = person;
//for overriding name
const { firstName: userName, age } = person;
console.log(userName, age);
