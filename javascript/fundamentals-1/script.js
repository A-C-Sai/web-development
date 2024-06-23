/** Value - smallest unit of information we can have in javascript

console.log(23);
console.log("Hello World!");
*/

/** Variables
 * variables names can only contain alphanumeric, _ and $
 * cannot start with a number (alphabets, _ and $ acceptable)
 * reserved keywords not allowed
 * variable that are all in UPPER CASE are reserved for conastants

let firstName; // camelCase naming convention
firstName = "Sam";
console.log(firstName);
 */

/** Data Types
 * every value is javascript is either an Object or a Primitive (immutable)
 * In javascript we don't have to manually define the data type of the value stored in a variable.

console.log(typeof(23)); // Number
console.log(typeof(30.5)); // Number
console.log(typeof("Hello World")); // String
console.log(typeof(true)); // Boolean
console.log(typeof(false)); // Boolean

let uninitializedVariable;
console.log(uninitializedVariable); // Undefined
console.log(typeof(uninitializedVariable)); // Undefined

console.log(typeof(null)); // Object (bug)
*/

/** Type Coversion and Coersion

 * Type Conversion - explicit

console.log(Number("Patrick"), typeof(Number("Patrick")));

 * Coersion - implicit; 
    Note: Different operators may trigger different type coersion (may lead to unexpected bugs)

 */

/** Truthy and Falsey Values 

console.log(Boolean(0), Boolean(''), Boolean(undefined), Boolean(null), Boolean(NaN));
console.log(Boolean({}));
*/

/** Declaring Variables
 * const
 * let
 * var
 */

/** Operators
 * operators have preceence refer below link:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 * +, -, *, /, **
 * + can be used for string concatenation
 * = assignment
 * ++, --
 * >, >=, <, <=
 * === / !== doesn't perform type coersion
 * == / != performs type coresion
 * !, &&, ||
 */

/** Template Literals

const firstName = "Sam", birthYear = 2003, currYear = 2024, job = "teacher";
const templateLiteral = `I'm ${firstName}, a ${currYear-birthYear} years old ${job}!`;
console.log(templateLiteral);

console.log(`This is a
multi-line
string
`);
*/

/** if-else statement
if(condition){
    stmt;
} 
else if (condition){
    stmt;
}
else {
    stmt;
}
 */

/** Switch Statement

const day = prompt("What day is it today:").toLowerCase();

switch(day){ // strict comparison
    case "monday" || "tuesday" || "wednesday" || "thursday" || "friday":
        console.log("Today is a working day");
        break;
    case "saturday" || "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a vaild day");
}
*/

/** Ternery Operator
 * expression/condition ? ifTrue : ifFalse;
 */

/**
 * Javascript is backwards compatible
 * How to use modern javascript:
    - During Development: use the latest browser
    - During Production: Use Babel to transpile and polyfill code (converting back to ES5 to ensure browser compatibility for all users.)
 */
