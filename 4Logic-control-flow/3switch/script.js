const date = new Date(2023,1,23,9,0,0)
const month = date.getMonth()
console.log(month);

switch (month) {
  case 1:
    console.log('hey im in jan');
    break;
  case 2:
    console.log('hey im in feb');
  break;
  case 3:
    console.log('hey im in mar');
    break;
  default:
  console.log('hey im not in jan feb and mar');
    }

   