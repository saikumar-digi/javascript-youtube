const date = new Date(10,10,2023,9,0,0)
const h = date.getHours()

if (h>12) {
  console.log('Good afterNoon');
 }  else if(h>18){
  console.log('Good evening');
 } 
else {
  console.log('Good Morning');
}

//nested if 

if (h>12) {
  console.log('Good afterNoon');
 }  else if(h>18){
  console.log('Good evening');
  if (h===20) {
    console.log('good night and sleep');
  }
 } 
else {
  console.log('Good Morning');
  if (h===6) {
    console.log('waekup');
  }
}
   