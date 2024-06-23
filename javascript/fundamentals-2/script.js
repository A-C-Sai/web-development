"use strict";

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

methods:
- <array_name>.push(element) adds element to the end of the array; returns new array length
- <array_name>.pop() removes the last element in the array returns removed element
- <array_name>.unshift(element) adds element to the start of the array; returns new array length
- <array_name>.shift() removes the first element in the array returns removed element
- <array_name>.indexOf(element) index of element if it exists else -1
- <array_name>.includes(element) true/false
*/



/*
function MinMax(arr) {
    // able to find the minimum and maximum element 
    // of a given array in a single scan

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        else {
            if (arr[i] > max) max = arr[i];
        }
    }

    return [min, max];
}

const [min, max] = MinMax([3, 6, 2, 9, 10, 0, 5, 2, 8]);

console.log(min, max);
*/



/** Objects

const <obj_name> = {
    <key/property>: value,
    <key/property>: value,
    <key/property>: function expression (object method)
};

// accessing
<obj_name>.<property>
<obj_name>['<property>']

-> setting can be done using both dot and bracket notation, can create new properties on the fly

-> "this" keyword refers to the object itself

*/

/** Loops

-> loops keeps running while loopCondition is true
for(let counter = value; loopCondition; update counter){
    stmt;
}

keywords: continue, break

let counter = value;
while(condition) {

    update counter;
}

*/

/**
 * console.log()
 * console.warn()
 * console.error()
 * console.table()
 */