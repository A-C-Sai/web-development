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

/** Sets
 * const s = new Set(<iterable>);
 * unique elements
 * order is not maintained, cannot use index so we cant retrieve elements, we can just check it's existence
 * can have an empty set; const s = new Set();
 * .size
 * .has(<element>)
 * .add(<element>)
 * .delete(<element>)
 * .clear()
 * sets are also iterables
 * can use the spread operator
 */

/** Maps
 * In objects, the keys can only be strings but Maps supports a wide variety of data types for keys. e.g. array and objects can be used as keys, remember to use the same reference while setting property and retrieving as arrays and objects reside in heap.
 * const m = new Map();
 * .set(<key>, <value>) ---> returns the modified map which allows us to chain multiple set commands
 * .get(<key>) --> data type of key is important, if key doesn't exist, we get undefined
 * .has(<key>)
 * .delete(<key>)
 * .size
 * .clear()
 * const m2 = new Map([[<key>, <vale>],[<key>, <vale>],[<key>, <vale>]...,[<key>, <vale>]])
 * Object to Map conversion: new Map(Object.entries(<object>))
 * Maps are iterables, OBJECTS ARE NOT
 * Maps to Array: used spread operator on Map
 * .keys()
 * .values()
 * .entries()
 */

/** Strings (primitives) (cannot modify)
 * can index, but negative index not possible
 * .length
 * .indexOf("<element>/<substring>") ---> first occurrence
 * .lastIndexOf("<element>")
 * .slice(begin, end) [begin, end) ; can use negative numbers
 * strings are primitives but they have methods. JS automatically converts string primitive to sting object using new String() when a method is called. i.e. Boxing
 * all string method return string  primitive.
 * .toLowerCase()
 * .toUpperCase()
 * .trim()
 * can chain methods
 * .replace("<to_replace>"","<replace_with>"") ---> replaces first appearance; case sensitive
 * .replaceAll()
 * can use RegEx
 * .includes("<substring>")
 * .startsWith("<substring>")
 * .endsWith("<substring>")
 * .split("<delimiter>") --> returns array
 * <arrayObj></arrayObj>
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

*/
