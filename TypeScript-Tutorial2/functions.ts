function add(n1: number, n2: number) {
  return n1 + n2;
}

//"void" means this function doesn't return anything, but if we console.log void we will get undefined which is value in js
/*
if we use undefined as type we will need to add "return;" in the end of function, 
otherwise we can use void which will also return undefined but withot returning it in the function
*/
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(5, 11));

addAndHandle(10, 10, (result) => {
  console.log(result);
});
