function calculator(a, b, c) {
  let result;
  switch (c) {
    case '+':
      result=(a + b);
      break;
    case '-':
      result=(a - b);
    default:
      result=('error its not a oporator');
    }
    console.log(result);
    return result;
  }
calculator(10, 20, '*')