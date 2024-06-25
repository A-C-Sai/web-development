'use strict';
/** Features
 *
 * High-Level Language
 * Automatic Memory Management
 * Interpreted or Just-In-Time Compiled
 * Multi-Paradigm (procedural, object-oriented & functional programming)
 * Prototype-Based OO Language - everything is a object in JS expect for primitive types
 * First-Class Functions - functions are simply treated as variables, can be passed to and
 *                         be returned by other functions
 * Dynamically-Typed Language
 * Single-Threaded
 * Non-Blocking Event Loop
 */



/** JS Engine and Runtime
 *
 * Contains:
 *  - Call Stack : where code is executed using execution context
 *  - Heap : unstructured memory pool which stores all the objects that the app needs

 * Compilation : entire code is converted into machine code at once, and written to a binary
                 file that can be executed by a computer

 * Interpretation : Interpreter runs through the source code and executed it line by line

 * JIT Compilation : Imagine if someone gave you a set of tasks in German. Interpreter reads the tasks as he goes,
                     translates each task into English, and then does the task. Every time he does a German task,
                     he has to translate it again...even if he already did a similar task or the exact same task before. A JIT keeps often used tasks translated in English and refers back as needed. If a task is executed only once, it often does the same thing that an interpreter does. A JIT compiler converts code into byte code first (error free program). Then, at runtime, it changes the byte code into machine-readable code, which makes the program run faster.

 * Parsing -> Compilation    ->     Execution
                   |                    |
                     <- Optimization <-


 * Runtime for JS is the Browser : JS engine, Web APIs, Callback Queue
 * JS can exist outside of the browsers e.g. in Node.js
 *
*/



/** Scope and The Scope Chain
 *
 * Scoping : How our program's variables are organized and accessed. Where do variables live?
             Where can we access a certain variable and where not?

 * Lexical Scoping : The rules of where we can access variables are based on exactly where in the code, function
                     and blocks are written.

 * Scope : Space in which a certain variable is declared. There is globas, function/local  and block scope.

 * Scope of a variable : Region of our code where a certain variable can be accessed

 * Every Scope has access to variables from all outer scopes (one-way street)

 * When a variable is not on the current scope, the engine loops up in the scope chain until it finds the variable.
   This is called variable lookup.

 * Only let and const are block scoped doesn't apply to var, they end up in the closet function scope

 * Functions are also block scoped when using strict mode.

 * We can reassign variables from outer scopes even with nested functions.
   (unlinke in python, where we would have to use the nonlocal keyword)

   function a() {
       let foo = 'foo';
       console.log(foo);
       function b() {
           foo = 'baz';
       }
       b();
       console.log(foo);
   }

   a();


*/


/** Hoisting
 *
 * Makes some types of variables accessible/usable in the code b/4 they are actually declared.
 * TDZ - Temporal Dead Zone
 * Advice : try not to use variables / functions before declaration.
            Have all declarations and function prototypes at the top of the file.
 *
*/

// window is the global object of JS in the browser


/** this keyword
 * 
 * Special variable that is created for every execution context (every function)
 * Takes the value (point to) the owner of the function in which the this keyword is used
 * this is NOT static. It depends on how the function is called and it's value is only assigned when the
   function is actually called.

 * Method : this = <Object that is calling the method>
 * Simple function call : this = undefined in strict mode otherwise window
 * Arrow Functions : this = <this of surrounding function (lexical this)>
 * Event listenet : this = <DOM element thta the handler is attached to>
 * 
*/