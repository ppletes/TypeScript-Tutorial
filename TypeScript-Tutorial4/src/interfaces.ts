//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

//can use interface instead of custom type, but sometimes not (interface is more cleared)
//in interface is not possible to add 'private' or 'public' property
interface Named {
  //property name is only setted once, after that it can be only readed
  readonly name?: string;
  outputName?: string; //'?' means this property might exist, but it doesn't have to
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    //adding '?' or adding a default value
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there - I am");
console.log(user1);
