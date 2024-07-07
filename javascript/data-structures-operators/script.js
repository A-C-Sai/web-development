'use strict';

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
const {property-1: aliasName, property-2: aliasName, ..., property-n: aliasName} = Object;

-> can set default values to properties that may not exist [] (empty array)


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
    }
}

const person1 = {
    lastName: "Potter",
    firstName: "Harry"
}

obj.greeting(person1);
*/






