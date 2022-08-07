//Variables are containers for storing values

//const keyword is used to store values which are not changable
const daily = 3000;
const monthly = 90000;
//let keyword is used to store values which are changable
let total = monthly * 12;
console.log(total);

let name = "karim",
  age = 23,
  profession = "Developer";
console.log(name, age, profession);

//re-declaration of var variables  can't give error
var carName = "Aqua";
var carName;
console.log(carName);

//re-declaration of same let or const variables gives error

// let nums = [2, 4, 5, 3, 5, 6];
// let nums = [];

// const age = 32;
// const age;

//When you add numbers with string number it will concatenate number result with string
let x = 5 + 3 + "8";
console.log(x);
