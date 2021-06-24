//with type unknown we can set any type value in variable, but we cant set that type ona nother variable
var userInput;
var userName;
userInput = 5;
userInput = "Max";
/* EXAPMLE - DOESN'T WORK
userName=userInput; not working

in this situation we need to change unknown to any OR:
*/
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
