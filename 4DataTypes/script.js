//string
const firstName = 'sara';
 console.log( firstName, typeof firstName);

 //number
 const age = 25;
console.log(age, typeof age);

//boolen
const boolen = true;
console.log(boolen,typeof boolen);

//null
const num = null;
console.log(num,typeof num);


// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 900711234740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'abu',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
