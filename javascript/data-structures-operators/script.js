"use strict";

/* Destructuring Arrays
const arr = [1, 2, 3];
const [a, b, c] = arr; // simple destructuring
console.log(a, b, c);
const [a_, b_] = arr; // not all elements need to be taken out, here were are only taking out the first two.
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
console.log(k, l, m); // m will be undefined
const [n=1, o=1, p=1] = [8, 9]; // default values
console.log(k, l, m);
*/

/* Destructuring Objects
const {property-1, property-2, ..., property-n} = Object;
In the above example the variable names have to match the original property names in the object, order doesn't matter

const {property-1: aliasName, property-2: aliasName, ..., property-n: aliasName} = Object;

-> can set default values to properties that may not exist [] (empty array) otherwise they will have value of undefined

const {property-1: aliasName, property-2: aliasName = []} = Object;


// mutating variables
let a = 111;
let b = 234;
const obj = { a: 6, b: 32 };
console.log(a, b);
({ a, b } = obj); ---> wrapping everything in parantheses
console.log(a, b); ----> a = 6, b = 32 we have over-written the initial values


// nested objects
const nestedObj = {
    fullName: {
        firstName: "Harry",
        lastName: "Potter"
    }
};

const { fullName: { firstName: fName, lastName: lName = "" } } = nestedObj;
console.log(fName, lName);

// practical use - destructuring an object when passing it as an argument to a function.
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
  -> works on all iterables (strings, maps and arrays) NOT objects (objects are not iterables).
  -> can use it where we usually pass multiple values separated by commas. ------> IMPORTANT e.g. can't use in template literals / strings
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

/* Rest Pattern and Parameters (think of this as packing, and spread operator as unpacking)
// rest pattern always must be the last in the destructuring assignment. AND there can only be 1 rest pattern per destructuring assignment. Works with objects also.
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

function myFunc(firstParam, ...otherParams){
  stmt....
}
*/

/* 
  -> Logical Operators can use any data type, can return any data type, short-circuit evaluation.
  -> || returns the first truthy value else the last element (edge case: when the value is 0)
  -> && returns the first falsey value else the last element
  -> can use the short-circuiting behaviour in place of ternery operator (|| to set default values) and if statements ( && Run second operand if the first value exists)

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
const guests = party.numberOfguests || "Not Mentioned"; ----> even if numberOfguests exists and has a value of 0 the default value is set
const guests = party.numberOfguests ?? "Not Mentioned";  -----> this solves the problem

console.log(guests);

 */

/* Logical Assignment Operator
 * ||=, ??=, -----> assign a value if / to already false/ nullish value
 * &&= -----> assign a value to a already truthy value
 */

/** for-of loop                                 _________ Array Iterator
 * for (const <varname> of iterable) stmt...    |
 * for (const [index, <varname>] of iterable.entries()) stmt...
 * console.log([...iterable.entries()]); ---> Array or Arrays
 */

/** Enhanced Object Literals
 
const Lname = "Smith";
const person = {
  Fname: "John",
  Lname, -----> defined outside obj
  fullName() { ----> no need for property : func expression
    console.log(`${this.Fname} ${this.Lname}.`);
  },
  [`${1 + 3}th month sales`]: 400, ----> computing property names
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
 * Object.keys(<object>) ---> array with property names
 * Object.values(<object>)
 * Object.entries(<object>) ----> destructure into key, value
 *
 *
 * We are able to access non-existing array indexes --> undefined; we can also set values for non-consecutive indexes.
 */

/** Sets
 * const s = new Set(<iterable>);
 * unique elements
 * order is not maintained, cannot use index so we cant retrieve elements, we can just check it's existence
 * can have an empty set; const s = new Set();
 * .size -----> instead of .length
 * .has(<element>)
 * .add(<element>)
 * .delete(<element>)
 * .clear()
 * sets are also iterables ----> can loop over them
 * can use the spread operator ----> [...set]
 *
 * set1.intersections(set2) ---> returns new set
 * set1.union(set2)
 * set1.difference(set2) ---> order of sets matter
 * set1.symmetricDifference(set2)
 *
 * we also have methods for isSubsetOf, isSupersetOf and isDisjointFrom
 *
 *
 */

/** Maps
 * In objects, the keys can only be strings BUT Maps supports a wide variety of data types for keys. e.g. array and objects can be used as keys, remember to use the same reference while setting property and retrieving as arrays and objects reside in heap.
 * const m = new Map();
 * .set(<key>, <value>) ---> returns the modified map which allows us to chain multiple set commands
 * .get(<key>) --> data type of key is important, if key doesn't exist, we get undefined
 * .has(<key>) ---> objects also have similar method
 * .delete(<key>) -------> can also delete properties from Objs using delete operator but its a slow process
 * .size
 * .clear()
 * const m2 = new Map([[<key>, <vale>],[<key>, <vale>],[<key>, <vale>]...,[<key>, <vale>]]) ---> array of arrays
 * Object to Map conversion: new Map(Object.entries(<object>))
 * Maps are iterables, OBJECTS ARE NOT ---> for (const [key, val] of map) stmt...
 
 * Maps to Array: used spread operator on Map ---> [...map] ---> array of arrays
 * .keys()  ----> Map Iterator so use spread operator
 * .values() ----> Map Iterator so use spread operator
 * .entries() ----> Map Iterator so use spread operator  ---> same as [...map]
 */

// There are also other built-in and non built-in Data Structures in JS.

/** Array vs Set vs Obj vs Map
 *
 * Array
 *  - need ordered list of values allowing duplicates
 *  -when we need to manipulate data
 *
 *
 * Set
 *  - need to work with unique values
 *  - high performance is imp
 *  - remove duplicates from array
 *
 * Obj
 *  - traditional key/value store
 *  - easier to write and access
 *  -use when we need to include functions (methods)
 *  - when working with JSON (can convert to map)
 *
 *
 * Map
 *  - performance
 *  - keys any datatype
 *  - easy to iterate
 *  - easy to compute size
 *  - when we simple need to map key to values
 *  - need keys that are not strings
 *
 *
 */

/** Strings (primitives) (cannot modify)
 
 * can index, but negative index not possible
 * .length ---> var.length or 'string'.length
 * .indexOf("<element>/<substring>") ---> first occurrence or -1
 * .lastIndexOf("<element>")
 * .slice(begin)   
   .slice(begin, end) [begin, end)
   can use negative numbers and mix of +ve n -ve ---> length = end - begin
 
 * strings are primitives but they have methods. JS automatically converts string primitive to sting object with the same content using new String(), it is this obj that are methods are called upon. When the operation is done, th eobj is converted back to a regular string. All string methods return primitives, even if called on a string obj i.e. Boxing


 * .toLowerCase()
 * .toUpperCase()
 * .trim(), .trimStart(), .trimEnd()
 * CAN CHAIN METHODS
 * .replace("<to_replace>","<replace_with>") ---> replaces first appearance; CASE SENSITIVE like all string methods are
 * .replaceAll()


 * can use RegEx / /g

 * .includes("<substring>")
 * .startsWith("<substring>")
 * .endsWith("<substring>")
 
 * .split("<delimiter>") --> returns array
 * <arrayObj>.join("<delimiter>")


 * .padStart(total_length, pad_with)
 * .padEnd(total_length, pad_with)


 * String() --> type casting OR number + '' = string
 * .repeat(number_of_times)
 * 
 * 
 * \ escaping
 */

/* Challenge
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


// Challenge 1
// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];
// const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     let goals = 0;
//     for (let j = 0; j < game.scored.length; j++) {
//       if (game.scored[j] === players[i]) goals++;
//     }
//     console.log(`${players[i]}: ${goals}`);
//   }
// };
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

// Challenge 2
// for (const [goalNO, player] of game.scored.entries()) {
//   console.log(`Goal ${goalNO + 1}: ${player}`);
// }

// let avg = 0;
// for (const o of Object.values(game.odds)) {
//   avg += o;
// }
// avg /= Object.values(game.odds).length;
// console.log(avg);

// for (const [team, odds] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[team] ? `victory ${game[team]}:` : `draw:`} ${odds}`
//   );
// }


// for (const [team, odds] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${team === 'x' ? `draw` : `victory ${game[team]}`}: ${odds}`
//   );
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.table(scorers);

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Challenge 3
// const UniqueEvents = [...new Set(gameEvents.values())];
// gameEvents.delete(64);
// console.log(gameEvents);

// for (const [time, event] of gameEvents) {
//   let eventString = event;
//   time <= 45
//     ? (eventString = "[FIRST HALF] " + eventString)
//     : time <= 90
//     ? (eventString = "[SECOND HALF] " + eventString)
//     : (eventString = "[EXTRA TIME] " + eventString);
//   console.log(eventString);
// }

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const variables = document.querySelector("textarea").value.split("\n");
//   for (const varName of variables) {
//     const [first, second] = varName.trim().split("_");
//     console.log(
//       `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     );
//   }
// });

*/
