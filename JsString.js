/**
 *  One or more character written in quotes is javascript string
 *
 */

let name = "karim";
console.log(name);

let para =
  "From his first meeting with Fidel Castro in Mexico in 1955 to his death in the Bolivian Andes in 1967, Ché Guevara's revolutionary career spanned little more than a decade. Yet the handsome young face, gaze set firmly on the future, has lived on through generations. In today's imagination Ché remains a mythical, romantic hero -- an uncompromising revolutionary, selfless, dedicated, incorruptible, ready to die for his beliefs.";
//String length property finds length of string
const length = para.length;
console.log(length);

//Escape Characters

// let lang = "JavaScript is also called  "loosely-typed" language."     ---------------> js does not understand it

// for this condition we use escape character

/**  Code       Result      Description
 *  1. \'          '         Single quote
 *  2. \"           "         Double quote
 *  3. \\           \         Back slash
 */

let lang = 'JavaScript is also called  "loosely-typed" language.';
console.log(lang);

let txt = "It's alright!👍";
console.log(txt);

let backslash = "This \\E=mc2\\ is Einstein mass energy equation";
console.log(backslash);

/**
 * \b ........Backspace
 *
 */

let Backspace = "this is a quesiton to \b how peoples are learning to fast.";
console.log(Backspace);

/**
 * \f  .......... Form feed
 */
let feed = "Vist freecodeCamp. \fLearn JavaScript ";
let pattern = /\f/;
console.log(pattern);

/**
 * \n    ...... new line
 *
 */

let nline = "Apple is the most woundring comapny \n and Microsoft also";
console.log(nline);

/**
 * \r ..........Carriage return
 */

let Creturn = "there is a couple of this \r people must do in their life";
console.log(Creturn);

/**
 * \t ........ Horizantal Tabular
 */

let Htb = "Farhenheit \t will be converted to celcius";
console.log(Htb);

/**
 *  \v .......... Vertical Tabular
 */

let vtb =
  "The function normalImg() is triggered when the mouse pointer is \v moved out of the image. That function sets the height and width of the image back to normal";
console.log(vtb);

//JavaScript Strings as Objects
