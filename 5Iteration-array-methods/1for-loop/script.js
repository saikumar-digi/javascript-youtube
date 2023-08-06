// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

for (let i = 2; i<=4; i++) {
    console.log(`${i} table below`)

    for (let j = 1; j<=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// Loop through an array
const arr = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 7) {
      console.log(arr[i] + ' is my lucky number')
  }
else {
    console.log(arr[i]);
  }
}
