const x = 50;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 100;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);
//you cant use const and let out side the block 

// var IS function scoped
function run() {
  var d = 50;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object
