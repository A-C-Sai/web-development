"use strict";
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
      - concurrency model: how the JavaScript engine handles multiple tasks happenning at the same time.
      - js runs in one single thread, so it can only do one thing at a time.
      - long-running tasks would block the single thread. However, we want non-blocking behaviour.
      - by using an event-loop we can take long-running tasks, execute them in the background and puts
        them back in the main thread once they are finished.
 */

/** JS Engine and Runtime
 * JS Engine - Program that executes JS code
 * Contains:
 *  - Call Stack : where code is executed using execution context
 *  - Heap : unstructured memory pool which stores all the objects that the app needs

 * Compilation : entire code is converted into machine code at once, and written to a binary
                 file that can be executed by a computer

 * Interpretation : Interpreter runs through the source code and executed it line by line

 * JIT Compilation : Imagine if someone gave you a set of tasks in German. Interpreter reads the tasks as he goes,
                     translates each task into English, and then does the task. Every time he does a German task,
                     he has to translate it again...even if he already did a similar task or the exact same task before. A JIT keeps often used tasks translated in English and refers back as needed. If a task is executed only once, it often does the same thing that an interpreter does. A JIT compiler converts code into byte code first (error free program). Then, at runtime, it changes the byte code into machine-readable code, which makes the program run faster.
                     
                     Entire code is converted into machine code at once, then executed immediately after compilation. (No protable file to execute)

* JS ENGINE (e.g. V8):       
    * Parsing (AST) -> Compilation (AST -> Unoptimised Machine Code) -> Execution (happens in JS ENGINE'S call stack)
                                                          |                    |
                                                            <- Optimization <-

* Parsing, Compilation and Optimization happens in some special threads inside the engine which cannot be accessed through our code (completely separate from the main thread that is running call stack executing our own stack)                                                   

 * Runtime (container including all the things we need to use JS) for JS is the Browser : JS engine [Call stack, Heap], Web APIs (functionalies provided to the engine, no part of js itself, accessible on the global window obj), Callback Queue (data structure containing all the call back functions that are ready to be executed. E.g. even handler functions are also called callback fucntions. After the event, first, call back function is put into the callback queue, then, when the call stack is empty, the call back function is passed to the call stack so that it can be executed, and this happenes by something called the event loop (essential for non-blocking concurrency model.)).

 * JS can exist outside of the browsers e.g. in Node.js (JS ENGINE[CALL STACK, HEAP], C++ Bindings & Thread Pool, Callback QUEUE). Different JS runtimes do exist.
 *
*/

/* Execution context & the call stack

- Assusme our code just finished compiling, it is ready to be executed.

- Creation of global exectution context for top-lvl code (not inside function)

- Execution context is an environment in which a piece of JS is executed. Stores all the necessary info for some code to be executed. e.g. local vars or arguments passed to a function. JS code always runs inside an execution context.

- Exactly ONE global execution context (EC): default context, created for code that is not inside any function
- Execution of top-lvl code (inside global EC)

- execution of functions and waiting for callbacks

- for each and every function call, a new execution context will be created containing all the info
  that is necessary to run that func. Same goes with methods (functions attached to objs). All these ECs together 
  make the call stack

- when all funcs are done executing the engine will keep waiting for callback funcs to arrive so that it
  can execute these. Event loop provides these callback funcs.

- INSIDE EXECUTION CONTEXT:

    - Variable Environment (VE) : 
          -let, const, var declarations
          - Functions
          - arguments obj (all arguments that were passed to the function that the current EC belongs to) (not for arrow funcs at least not their OWN)
    - Scope Chain (contains reference to variables outside of the current func )
    - this keyword (not for arrow funcs at least not their OWN)

    - The content of the EC ARE GENERATED during the "creation" phase, right b4 execution


- Call Stack, place where ECs get stacked on top of each other to keep track of where we are in the execution.

- Global EC stays in call stack until the program is really finished. Program will stay in this state (call stack with only global EC) until e.g. browser tab or window is closed.

*/

/** Scope and The Scope Chain
 *
 * Scoping : How our program's variables are organized and accessed. Where do variables live?
             Where can we access a certain variable and where not?

 * Lexical Scoping : The rules of where we can access variables are based on exactly where in the code, function
                     and blocks are written.

 * Scope : Space in which a certain variable is declared (variable environment in case of funcs). There is global, function/local applicable to func declarations, expressions as well as arrow funcs each create their own scope  and block scope (ES6).

 * Scope of a variable (includes functions also as they are also treated as variables) : Region of our code where a certain variable can be accessed

 * Only let and const are block scoped doesn't apply to var, they end up in the closet function scope

 * Functions are also block scoped when using strict mode. i.e. functions declared inside a block are only accessible
   within the block.

 * Every Scope has access to variables from all outer scopes (one-way street)

 * Variables are not copied from one scope to the other. When a variable is not on the current scope, 
   the engine loops up in the scope chain until it finds the variable. This is called variable lookup.


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
 * B4 execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment obj. Happens during the "creation" phase of EC.
 
 * TDZ - Temporal Dead Zone
 * Advice : try not to use variables / functions before declaration.
            Have all declarations and function prototypes at the top of the file.


 * func declarations: hoisted, actual func, block (strick mode) else function
 * var variables: hoisted, undefined, function (won't get errors)
 * let and const variables: not hoisted, <uninitialized>,TDZ, block
 * function expressions and arrows: depends if using var or let/const
*/

// window is the global object of JS in the browser, variables declared with var create a property on the global window object

/** this keyword
 * 
 * Special variable that is created for every execution context (every function)
 * Takes the value (point to) the owner of the function in which the this keyword is used
 * this is NOT static. It depends on how the function is called and it's value is only assigned when the
   function is actually called.

 * Method : this = <Object that is calling the method>
 * Simple function call : this = undefined in strict mode otherwise window
 * Arrow Functions : this = <this of surrounding function (lexical this)>
 * Event listener : this = <DOM element that the handler is attached to>
 *  
*/

/** Regular and Arrow functions
 * 
 * Variables decalred with var create properties on the global objects
 * Don't use arrow functions as methods, use function expressions
 * When we try to access a property of an obj which doesn't exist we get undefined
 * We can preserve "this" by assigning it to a variable (self/that), we can also do this by using an arrow func
 * Arrow functions don't have access to arguments keyword
 * 
function add() { we can pass in more arguments than specified
    console.log(arguments);
    let c = 0;
    for (let i = 0; i < arguments.length; i++) {
        c += arguments[i];
    }
    return c;
}

console.log(add(1, 2, 3));
*/

/** Memory Management
 * Every value we create in JS goes through a memory lifecycle. [Allocate -> Use -> Release]
 * Engine automatically allocates a piece of memory to store the value
 * While code is running, the value is written, read, and updated in the allocated piece of memory
 * When no longer needed, the value is deleted from memory to free up resources. The released memory is used for new values.
 * 
 * For different types of values, memory is allocated in different places in the JS Engine
 * 
 * Primitives (immutable) are stored in the call stack (variable environment in the execution context in which they are created), objects/reference types are stored in heap, References to objects are also stored in call stack.
 * 
 * Variables in the call stack don't hold to object itself BUT the reference to the memory location of the object located in the HEAP.
 * 
 * 
 * Objs are not really copied when we pass them to a function BUT instead we only pass the reference.
 * 
 * not all variables declared with const are immutable, this is only true for primitive types.
 * 
const sam = {
    firstName: 'Sam',
    lastName: 'Matthews',
};

const samCopy = Object.assign({}, sam); // shallow copy (first level)
const samCopy = {...sam}  ---> spread operator

sam.lastName = 'Jeffery';

console.log(sam.lastName);
console.log(samCopy.lastName);

// Deep Copy

const samCopy = structuredClone(sam); ---> new function added to browsers, originally needed to use external libraries.


- In call stack, variable environments where primitives are stored are simply deleted when the corresponding EC pops off stack.

- To free up memory from the Heap, JS Engines employs a process called Garbabe Collection (central memory management tool). It is the JS Engine that run the Garbage collection automatically when it sees fit, developers don't have contol
over when the Heap is cleared by the Garbage collection.

- MARK-AND-SWEEP Algo.
  - mark all objects that are reachable from a root as "alive"
  - Roots: starting point to search for alive objs, e.g. Global EC, any other ECs of Running Funcs in the Stack,
            Active event listeners or timers, closures
  
  - Sweep: delete un-marked (unreachable) objs and reclaim memory for future allocations

-  Global EC will never dissapear, this root will always exist. Any globally defined Obj will never be garbage colleted,
    even if we no longer need it in our code.


- Memory Leak: When objs that are no longer needed are incorrectly still reachable, and therefore not being garbage collected. Make sure to deactivate event listeners and timers when they are longer required esp if they reference large objs.


*/
