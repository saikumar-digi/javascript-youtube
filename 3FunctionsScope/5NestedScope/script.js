function first() {
  const x = 500;

  function second() {
    const y = 400;
    console.log(x + y); //900
  }

  console.log(y);  //y is not defined

  second(); 
}

first()

if (true) {
  const x = 500;

  if (x === 500) {
    const y = 400;
    console.log(x + y); //900
  }

  console.log(y); //y is not defined
}
