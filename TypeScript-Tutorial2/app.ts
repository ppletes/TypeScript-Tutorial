//with type unknown we can set any type value in variable, but we cant set that type ona nother variable

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

/* EXAPMLE - DOESN'T WORK
userName=userInput; not working

in this situation we need to change unknown to any OR:
*/

if (typeof userInput === "string") {
  userName = userInput;
}

//default type is "void" because "never" type is newer type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occurred!", 500);
console.log(result);
