'use strict';

/** Function Declaration

-> can be used before it's declared

function <func_name>(parameters){
    stmt;
    return ..;
}

<func_name>(arguments);

*/

/** Function Expression

-> a function value stored in a variable

const <var_name> = function (parameters){ 
    stmt;
    retrun ..;
};

*/

/** Arrow Functions

-> great for a quick one-line functions. 
-> Has no "this" keyword

const <var_name> = (parameters) => {
    stmt;
    return .. ;    
};

*/


/** Arrays (mutable)

const <array_name> = [element1, element2, element3]; // can store hetrogeneous elements
const <array_name> = new Array(element1, element2, element3);

<array_name>.length // property
-> negative indexing not possible
<array_name>[index] // accessing
<array_name>[index] = value; // setting

*/
