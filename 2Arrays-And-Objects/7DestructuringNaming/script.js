// Setting object properties with the same name as a variable
const fName = 'sai';
const lName = 'kumar';
const myAge = 21;

const person = {
  fName,
  lName,
  myAge
};

console.log(person.fName);
console.log(person.myAge);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
