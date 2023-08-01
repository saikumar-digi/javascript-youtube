// string to num
let  amount = '100';

// 1
amount = parseInt(amount);

console.log(amount,typeof amount);

// 2
amount =+amount
console.log(amount,typeof amount);

amount = Number(amount)
console.log(amount,typeof amount);

//3
let name = 'hello'
name =+ name
console.log(name,typeof name);

//convert string to number
let amount1 = 100 ;
amount1 = amount1.toString()
console.log(amount1,typeof amount1); 

amount1 = String(amount1)
console.log(amount1,typeof amount1);


// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('sai' / 3);

console.log(amount, typeof amount);
