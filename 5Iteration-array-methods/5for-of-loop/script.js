// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}


//remove dublicates 
const arr = [1,2,3,4,5,3,5,6,6,7,8,9]

const constent = new Set(arr)
for (let num of constent) {
    console.log(num)
}