// Ways to declare a variable


let firstName = 'abu';
const lastName = 'sai';
let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;




console.log(100);

const num = 50;
console.log(num);

let name = "sai"
console.log(name);

const arr=[1,2,3,4]
arr.push(5)
console.log(arr);
arr.unshift(0)
console.log(arr);

const person = {
    name : "sai"
}
person.name="abu"
console.log(person);

person.email="abu@gmai.com"
console.log(person);
