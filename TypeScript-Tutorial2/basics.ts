function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw Error("Incorrect input!");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

/* TYPE ASSIGNMENT
let number1: number;
number1=5; 
*/
const number1 = 5; //same as 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
/* SHOW ERROR - INVALID ASSIGNMENT (expect string get number)
let resultPhrase = "Result is: ";
resultPhrase=0;
*/

add(number1, number2, printResult, resultPhrase);
