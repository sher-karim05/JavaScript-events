//Objects are containers store many values

const car = { type: "mazda", model: "2021", price: "5000000" };

/**Two ways to access object values
 
*By dot notation 
*/
const cartype = car.type;
console.log("Car type is " + cartype);

/**
 *By Bracket Notation
 */

const carPrice = car["price"];
console.log(`Car price is ${carPrice}`);

/**
 * OBJECT METHODS
 *
 * Methods are actions that can be performed on objects
 *
 * A method is a function stored as a property
 */

const student = {
  firstName: "Sher",
  lastName: "Karim",
  id: "2019-KIU-BS1038",
  Subject: "BS(RS&GIS)",
  University: "Karakoram International University Gilgit",
  fullName: function () {
    return this.firstName + " " + this.lastName; //This refers to person object
  },
};
//Accessing Object values
console.log(student.fullName());

/**
 * What is this?
 *In Javascript this refers to an object
 
 Don't declare number string and boolean as object
 */
