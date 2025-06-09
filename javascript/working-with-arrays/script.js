"use strict";

/**
 * Methods are simply functions that we can call on objects.
 * .slice() without any arguments can be used to create a shallow copy of an array. Can also provide start & end. +ve & -ve. ----> returns an array
 

 * .splice(start_index, deleteCount) will modify the original array unlike .slice(). The extracted elements are removed from the original array.

 * .reverse() mutates the original array

 * .concat()

 * .at()
    - by default -ve indices not possible with arrays, this allows -ve indicies.
    - also works on strings

 * .forEach(function(currentValue, index, arr){stmt...}) ---> higher-order func
 * Continue And Break don't work inside forEach but will work in for of loop
 
 * forEach also works on maps and sets, .forEach(function(value, key, map)) & .forEach(function(value, _, set))
 */
