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

