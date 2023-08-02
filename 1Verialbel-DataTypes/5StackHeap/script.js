// Value is stored in the stack
const name = 'abu';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'sai',
  age: 21,
};

let newName = name;
newName = 'kumar';

let newPerson = person;
newPerson.name = 'baba';

console.log(name, newName); // abu, kumar
console.log(person, newPerson); // { name: 'baba', age: 21 }, { name: 'baba', age: 21 }
