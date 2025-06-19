'use strict';

/** NUMBERS

  - All number in JS are represented internall as floating point numbers
  - 23 === 23.0
  - Numbers are represented internally in double-precision 64-bit binary format (only 53 used to store the digits themselves, rest used for sign and position of decimal point), IEEE 754 standard. (always stored in binary format)
  - In this binary form, it is very hard to orepresent some fractions (e.g. 0.1) theat are ez to represent in the base 10 system
  - 0.1 + 0.2 === 0.3 -----> will evaluate to false (bug) --> rounding errors in JS
  - String ---> Number: Number('23') OR console.log(+'23') --> performs type coersion
  - Number.parseInt('30px', 10) --> string has to start with a number, second paramater is the radix (the number system we are using)
  - Number.parseFloat()
  - parseInt and parseFloat are global functions also
  - it is better to call these functions on the Number obj; Number provides namespace for these functions
  - 23 / 0 ----> Infinity (special value in JS)
  - Number.isNaN()
  - Number.isFinite() ---> best way of checking if a value is a number
  - empty string is type coersed to 0 (can lead to bugs)
  - Number.isInteger(23), Number.isInteger(23.00) --> true, Number.isInteger(23.01) --> false
  - there is a difference b/w coresion and parsing

  - Math.sqrt(), Math.min(). Math.max() --> performs coersion but not parsing
  - Math.PI

  - Math.trunc(Math.random() * 6) + 1
  - const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  - Math.trunc() --> simply removes any decimal part
  - Math.round() --> round to nearest integer
  - Math.ceil() ---> round up to nearest integer
  - Math.floor() --> round down to nearest integer
  - All these methods do type coersion
  - Math.trunc and .floor behave similarily with +ve numbers but the difference is the way they handle -ve numbers
  - (2.75345).toFixed(2) --> returns a string
  - primitives dont actually have methods, what's happenning above is "boxing" (transform into Number Obj, call method on the Obj, convert back to primitive)

  - % the remainder operator

  - Numeric separators : 267_460_000_000 ---> engine ignores underscores but it imporves readability, can only be placed BETWEEN numbers. Placement of underscore gives different meaning. CANNOT PLACE 2 underscored in a row. JS won;t be able to parse strings numbers containing underscored into numbers (using Number or parseInt). Will result in NaN. e.g. Number("23_000")

  - 2 ** 53 - 1 ---> biggest no. JS can safely represent ---> Number_MAX_SAFE_INTEGER ---> after this point JS cannot garuntee accuracy and precision of regular numbers
  - "n" suffix transforms a regular number into a BigInt number or use BigInt() function without the "n". e.g. 40826826381733917193n 
  - BigInt is a primitive type and allows us to work with HUGE numbers.
  - We CANNOT mix regular and BigInt numbers. 
    - logical operators and string concatenation are the Exceptions.
    - Math operations won't work
    - With division it will return the colsest BigInt. e.g. 10 / 3 vs 10n / 3n
*/

/** DATES

1. cont var = new Date(); ---> date constructor
2. const var = new Date('<DateString>');
3. const var = new Date(year, month, day, hrs, min, sec)
- months in JS are 0 based
4. const var = new Date(ms passed since JAN 1st 1970) e.g. new Date(0)

- days * 24 * 60 * 60 * 1000 -----> days to ms ----> timestamp
- Dates are also a special type of Objects.
- .getFullYear() ---> there is also .getYear() but don't use that
- .getMonth() ---> 0 based
- .getDate() ---> returns the day of the month
- .getDay() ---> returns the day of the week (0 = sunday)
- .getHours()
- .getMinutes()
- .getSeconds()
- .toISOString
- .getTime() ---> timestamp since JAN 1st 1970

- Date.now() --> current timestamp

- we also have the "set" versions of the above methods

- performs auto-correction

- Date ---> Number = timestamp
- we are able to perform operations on dates
- moment.js


*/

/** setTimeout & setInterval
 *
 * setTimeout(callback, interval (ms)) callback runs just once after a defined time
        - NOTE: code execution doesn't stop at this point.
        - when code execution reaches this line, the setTimeout function is called and register the callback function
          to be called later. The the code execution simply continues.
        - this mechanism is called async JS

        e.g. const timerName = setTimeout(function(params){stmt...}, delay, arg-1, arg-2, ... , arg-n);

        - we are able to cancle the time b4 the dealy period e.g. based on a condition b4 that pre-defined dealy is reached
        - if(condition) clearTimeout(timerName);
 *
 *
 *
 * setInterval(callback, interval) keeps running forever at set intervals until we stop it
 */
