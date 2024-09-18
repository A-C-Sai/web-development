"use strict";

/* Destructuring Arrays
const arr = [1, 2, 3];
const [a, b, c] = arr; // simple destructuring
console.log(a, b, c);
const [d, , e] = arr; // skipping elements
console.log(d, e);

let f = 2;
let g = 3;
console.log(f, g);
[f, g] = [g, f]; // switching variables without temp variable
console.log(f, g);

const nested = [1, 2, [3, 4]]; 
const [h, , [i, j]] = nested; // destructuring within destructuring
console.log(h, i, j);

const [k, l, m] = [8, 9];
console.log(k, l, m);
const [n=1, o=1, p=1] = [8, 9]; // default values
console.log(k, l, m);
*/

/* Destructuring Objects
const {property-1, property-2, ..., property-n} = Object;
In the above example the variable names have to match the original property names in the object, order doesn't matter

const {property-1: aliasName, property-2: aliasName, ..., property-n: aliasName} = Object;

-> can set default values to properties that may not exist [] (empty array)

const {property-1: aliasName, property-2: aliasName = []} = Object;


// mutating variables
let a = 111;
let b = 234;
const obj = { a: 6, b: 32 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);


// nested objects
const nestedObj = {
    fullName: {
        firstName: "Harry",
        lastName: "Potter"
    }
};

const { fullName: { firstName: fName, lastName: lName = "" } } = nestedObj;
console.log(fName, lName);

// practical use
const obj = {
  greeting: function ({ firstName, lastName = "" }) {
    console.log(`Greetings ${firstName} ${lastName}`);
  },
};

const person1 = {
  lastName: "Potter",
  firstName: "Harry",
};

obj.greeting(person1);
*/

/* Spread Operator
  -> works on all iterables (strings, maps and arrays) NOT objects.
  -> can use it where we usually pass multiple values separated by commas.
  -> can use it to expand arrays/ objects based on existing arrays/ objects.

const arr = [1, 2, 3];
const arr1 = [7, 8, arr];
const arr2 = [7, 8, ...arr];
console.log(arr1, arr2);
console.log(...arr2);

const arr3 = [1, 2, 3, 4];
const arr4 = arr3;
arr4[0] = 2; // modifies original arr3 also
console.log(arr3, arr4);
const arr5 = [...arr3]; // shallow copy
arr5[0] = 3;
console.log(arr5, arr3);

const makePizza = function (topping1, topping2, topping3) {
  console.log(`Preparing Pizza with ${topping1}, ${topping2} and ${topping3}.`);
};

const toppings = ["capcisum", "olives", "onions"];
makePizza(...toppings);

// though objects are not iterables the spread operator works on objects also.

const person1 = {
  Fname: "John",
  Lname: "Smith",
};

const person2 = { ...person1 }; // shallow copy
person2.Fname = "Andy";

console.table(person1);
console.table(person2);
*/

/* Rest Pattern and Parameters
// rest pattern always must be the last in the destructuring assignment. AND there can onlyy be 1 rest pattern per destructuring assignment. Works with objects also.
const [a, , b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const obj = {
  Fname: "John",
  Lname: "Smith",
  Phone_no: "0434231256",
  Address: "3/1 Carmody St",
};

const { Fname: First_Name, Lname: Last_name, ...contact_details } = obj;
console.log(First_Name, Last_name, contact_details);

const add = function () {
  console.log(arguments);
};

add(2, 3);
add(2, 3, 4);
add(1, 2, 3, 4, 5);

const multiply = function (...numbers) {
  // rest parameter has to be the last parameter
  // packs values into an array
  console.log(numbers);
};

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

const params = [5, 7, 8, 9];
multiply(...params); // here it is the spread operator
*/

/* 
  -> Logical Operators can use any data type, can return any data type, short-circuit evaluation.
  -> || returns the first truthy value else the last element (edge case: when the value is 0)
  -> && returns the first falsey value else the last element
  -> can use the short-circuiting behaviour in place of ternery operator and if statements

  const obj = {
  Fname: "John",
};

console.log(obj.Lname); // undefined

*/

/* Nullish Coalescing Operator (??)
  -> Works with the concept of nullish values (null and undefined NOT 0 or '') instead of falsey values.
  -> solves the || short-circuit edge case mentioned above.

  const party = {
  time: "4:12",
  place: "Hall",
};
const guests = party.numberOfguests || "Not Mentioned";
const guests = party.numberOfguests ?? "Not Mentioned";

console.log(guests);

 */

/* Logical Assignment Operator
 * ||=, ??=,
 * &&= -----> assign a value to a already truthy value
 */

/* Challenge 1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
const {
  odds: { team1, x: draw, team2 },
} = game;
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    let goals = 0;
    for (let j = 0; j < game.scored.length; j++) {
      if (game.scored[j] === players[i]) goals++;
    }
    console.log(`${players[i]}: ${goals}`);
  }
};

// console.log(players1);
// console.log(players2);
// console.log(gk);
// console.log(fieldPlayers);
// console.log(allPlayers);
// console.log(players1Final);
// console.log(team1);
// console.log(draw);
// console.log(team2);
// printGoals("Akanji", "Lewandowski", "Weigl", "Gnarby");
// printGoals("Lewandowski", "Weigl");
// console.log((team1 < team2 && "team1") || "team2");
*/

/** for-of loop
 * for (const <varname> of iterable) stmt...
 * for (const [index, <varname>] of iterable.entries()) stmt...
 * console.log([...iterable.entries()]);
 */

/** Enhanced Object Literals
 
const Lname = "Smith";
const person = {
  Fname: "John",
  Lname,
  fullName() {
    console.log(`${this.Fname} ${this.Lname}.`);
  },
  [`${1 + 3}th month sales`]: 400,
};

*/

/** Optional Chaining
 * ?.
 * checks if the previous property in the chain exists before proceeding to the next property. Returns undefined if previous property doesn't exist.
 * can be used for methods also obj.method?.(arguments) ?? "Method doesn't exist"
 * works with arrays also e.g. users[0]?.stmt....
 */

/** Looping Objects
 *
 * Object.keys(<object>)
 * Object.values(<object>)
 * Object.entries(<object>)
 *
 */
