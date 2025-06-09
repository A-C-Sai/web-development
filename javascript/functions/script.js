"use strict";

/** Default Parameters (ES6)
 
 * ES5:  var = value || defaultVal

 * Functions can have default parameters defined in their function heading
 
 * Unlike python, there is no specific order in which default parameters need to be specified

 * Values for default parameters can be dynamic 
      - expressions
      - we can use the values of the parameters that are defiend b4 a given parameter to form an expression for the value of the current parameter.

 * If we choose to skip a certain parameter or use the default value while calling a function, pass undefined as the value for that parameter.

 * alert(``);
 */

/** How Passing Arguments Work
 
 * When passing arguments to function, be mindful which are passed by value and which are passed by reference.
 
 * Javascript does NOT have passing by reference, only has passing by value, even though it looks like it is passing by reference.

 * For objects we do pass by reference, the memory address of the object. However, that reference itself is still a value, it's a value that contains a memory address. We pass a reference to the function BUT NOT BY REFERENCE.
 */

/** First-class and Higher-order functions
 
 * JS treats functions as first-class citizens
 * This means functions are simply values
 * Functions are just another "type" of object
 * E.g. Store functions in variables or properties, pass functions as arguments to other functions, return functions from functions, call methods on functions.
 
 * A higher-order function is one which recieves another functions as an argument, that returns a new function, or BOTH
 * This is only possible b/c of first-class functions. e.g. addEventListener function

 * call-back functions allow us to create a level of abstraction, higher-order functions delegates tasks to the callback functions. 

 * <function>.name
 * <array>.forEach(<function>)
 */

/** Call and Apply Method

 * We can manipulate where the this keyword points to by using the call method. i.e manually set the this keyword for any function call.
 
 * <regular_function>.call(<where_to_point>, arg1, arg2, ... , arg-n)

 * similarly, the apply method takes an argument specifying where the "this" keyword should point and an array of arguments instead of comma seperated values; <regular_function>.apply(<where_to_point>, [arg1, arg2, ..., arg-n]); We can also use the call method with the spread operator to unpack array elements into comma separated values.
 */

/** The bind Method

 * Allows us to manually set the this keyword for any function call. BUT instead of calling the function right away, it returns new function with the this keyword bound.

 * const <new_func> = <regular_function>.bind(<bind_to>)
 * <new_func>(arg1, arg2, ... , arg-n)
 * we can also pass in partial arguments which we want to use to the bind method, to set them in stone/ pre-set values. i.e. partial application, part of the arguments of the original function are already applied.
 * const <new_func> = <regular_function>.bind(<bind_to>, arg1, arg2, ..., arg(n-1))
 * 
 * e.g. with event listeners
 
 * we can use the bind method specifically for partial application but setting the <bind_to> parameter to null. We don't care about the this keyword. Think of this like setting a default value BUT this is creating a brand new specific function based on a general function. Be mindful of the order of parameters.
 
 */

/** IIFE
 * Immediately Invoked Function Expressions; works with arrow funcs also.
 * (function(params){stmt})(args);
 * functions create scopes
 * {variables declared with let or const} ---> this is a block
 * data encapulation and data privacy
 */

/** Closures
 * Closure makes a function remember all the variables that existed at the functions' birthplace.
 
 * A function always has access to the variable environment of the execution context in which it was created, even after the execution context is terminated. Only the EC itself is gone from the stack, the VE is still stored in memory, in particular, it has been transferred to the heap. The VE still lives on engines memory.

 * If an obj is reachable by closure, it is not garbage collected. B/c of the closure, VE was moved up to the heap and NOT garbage collected. Therefore, stays in the heap indefinitely. This applies to objs in the heap and VEs for variables that are stored in the stack. As long as they are reachable by a closure.
 
 * Closure: VE attached to the function, exactly as it was at the time and place the function was created
 
 * In a sense, the scope chain is preserved through the closure. Even when the scope has already been destroyed b/c it's execution context is gone.

 * Closure has PRIORITY over scope chain
 
 * A closure is like a backpack that a function carries around whereever it goes. This backpack has all the variables that were present in the environment where the function was created.

 * A closure gives a function access to all the variables of its parent function even after the parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
 
 * We do NOT have to create closures manually, this is a JS feature that happens automatically. We can't even access closed-over variables explicitily. A closure is not a tangiable object in JS.

 * console.dir(<function>) ---> look at [[Scopes]], this is the VE of the <function>
 * [[]] ---> internal property that cannot be accessed from our code.
 * 
 * We don't need to return a function from another function to create a closure. e.g. variable declared outside BUT has been initialized inside a function.
 
 * Closures can change e.g. re-assingning a new func to a variable inside a function

 * Closures also include function arguments of parent function

 * e.g. setTimeout(function(){}, <wait_in_ms>)
                          |
                          --------- callback func
 */

/* Challenge 1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Pyhton", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        this.question +
          "\n" +
          this.options.join("\n") +
          "\n(Write option Number)"
      )
    );
    switch (answer) {
      case 0:
      case 1:
      case 2:
      case 3:
        this.answers[answer]++;
        break;
      default:
        alert("Invalid Option! Please Try Again.");
    }
    this.displayResults();
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}.`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const testCases = [{ answers: [5, 2, 3] }, { answers: [1, 5, 3, 9, 6, 1] }];
for (const testCase of testCases) {
  poll.displayResults.call(testCase, "array");
  poll.displayResults.call(testCase, "string");
}
*/

/* Challenge 2
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  const body = document.querySelector("body");
  body.addEventListener("click", function () {
    header.style.color = header.style.color === "red" ? "blue" : "red";
  });
})();
*/
