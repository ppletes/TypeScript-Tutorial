// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} //starting value is 5, which means "READ_ONLY" is on number 6; also I can add strings it doesn't have to be a number

/*
doing "const person: object ..." would give us error, we need to be more specific (example: adding {})
*/
// const person: {
//   name: string;
//   age: number;
// }
const person = {
  name: "Paula",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push('admin');
//person.role[1]=10;
//person.role = [0, "admin"];

/* ARRAYS TYPES
let favoriteActivities: any[];
favoriteActivities=['Sports', 1];
*/

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
