//Convert Temperature form Farhenheit to Celcius

const toCelcius = (farhenheit) => {
  return (5 / 9) * (farhenheit - 32);
};
console.log(toCelcius(45));
