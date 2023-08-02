let x;

// Coerced to a string
x = 10 + '10';

x = 10 + Number('10');

// Coerced to a number
x = 10 * '10';

// null is coerced to 0 as it is a `falsy` value
x = 10 + null;

x = Number(null);

x = Number(true);
x = Number(false);

// true is coerced to a 1
x = 10 + true;

// false is coerced to 0 (falsy)
x = 10 + false;

// Undefined is coerced to 0 (falsy)
x = 10 + undefined;

console.log(x, typeof x);
