'use strict';

/**
 * Methods are simply functions that we can call on objects.
 * .slice() without any arguments can be used to create a SHALLOW COPY of an array. Can also provide start & end. +ve & -ve. ----> returns an array. start only, [start, end)
 

 * .splice(start_index, deleteCount, replace_with_element) will modify the original array unlike .slice(). The extracted elements are removed from the original array.

 * .reverse() mutates the original array

 * arr1.concat(arr2) --> new array

 * .at()
    - by default -ve indices not possible with arrays, this allows -ve indicies.
    - also works on strings

 * .forEach(function(currentValue, index, arr){stmt...}) ---> higher-order func --> simply do some work without doing anything "side affects"
 * Continue And Break don't work inside forEach but will work in for of loop
 
 * forEach also works on maps and sets, .forEach(function(value, key, map)) & .forEach(function(value, _, set))


THE BELOW DATA TRANSFORMATION METHODS get the same parameters as the forEach method, with the reduce method being the EXCEPTION:
 - map method returns a new array containing the results of applying an operation on all original array elements. 
 - filter method returns a new array containing the array elements that passed a specific text cond.
 - reduce method boils all array elements down to one single value. ---> first paramater of callback is accumulator (acc)
      e.g. 
      const arr = [1,2,3,4];
      const sum = arr.reduce((acc,curr,idx,arr) => acc + curr, 0) // here 0 is the initial val of acc

      const max = arr.reduce((acc, curr) => acc > curr ? acc : curr, arr[0]);

      const arr = [2,3,4,5,6,7]
      arr.reduce((count, curr) => curr % 2 === 0 ? count+1 : count,0) --> I did the mistake of count++ it won't work as val++ increment the value but it still returns the previous val; use ++count to increment b4 returning

      - make sure to return the accumulator
      - we are not restricted to using a primitive value as the accumulator initial value


 - it is completely acceptable to have two or more return statements in the same func as long as only  one of them is  executed 

 - find method :  retrieve one element (the firts element that satisfies the condition) of an array based on a condition (can have complex find logic) ---> undefined if no matching element is found.
   - filter returns all elements that satisfy the condition while filter only returns the first element that satisfies the condition.
   - filter returns an array while find returns a single value

 - findIndex method: returns the index of the found element or -1 if no element is found ---> allows us to create a complex find condition as opposed to indexOf

 - findLast
 - findLastIndex
 - some --> returns true if atleast one element of an array satisfies the condition
 - every --> returns true ONLY IF EVERY element of an array satisfies the condition

 - callbacks don't have to be written in the methods directly. They can we defined outside by storing them in a variable and we can pass this variable to the method.

 - flat ----> has a depth paramater which defaults to 1
 - flatMap ----> essentially the map method which flattens the result, THIS METHOD ONLY GOES 1 LVL DEEP

 - sort method ---> sorts array in-place. NOTE: converts all values to strings b4 sorting by default. We can change this behaviour by passing in a callback function which takes in two parameters (a,b). Think a as current val and b as next val. (curr, next).
   - if the returned value is less than 0 then current element will be sorted b4 next element
   - if the returned value is greater than 0 then next element will be sorted b4 current element
   - if the returned value is equal to 0, then the values don't change position

   To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.


   function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  } else if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}



 - array grouping: allows us to group values in an array based on a condition.
    - Object.groupBy(array, callback) --> returns an object with specified groups defined in the callback as properties. If none of the elements can be placed in a specific group that group won't exist in the final obj. We can also group based on one of the obj's properties.
    
    const arr = [0, 2, 4, 7, 8, 9, 3, 17];
    const groups = Object.groupBy(arr, function (num) {
      if (num > 0) {
        if (num % 2 === 0) {
          return 'even';
        }
        return 'odd';
      }
      return 'others';
    });
    console.log(groups);


    e.g. 
    Object.groupBy(object, object => object.property)
      OR
    Object.groupBy(object, ({property}) => property) ---> destructuring



  - EMPYT ARRAY: const arr = new Array(7); // if only one argument passed, a new EMPTY array of the given size will be    created, we can't really use this array for anything. One thing we can do is use the fill method. Weird behaviour.

  - fill method: arr.fill(1, 3, 20); // .fill(fill_value, start, end) where end is not included.
  console.log(arr);

  - Array.from({length: x }, (curr, idx) => stmt...)

  - querySelectorAll returns a NodeList it is Array-like BUT we can't use array methods on it. We can use Array.from to convert it to an Array. we could also use the spread operator and do the mapping separately or use the Array.from to to both at once.

  - NaN is not considered nullish, doesn't work with ?? nullish colasing operator


  - Non-Destructive Alternatives : .toReversed(), .toSorted(), .toSpliced, .with(idx, new_val)
 */

/* BANKIST

   - element.insertAdjacentHTML(position, html)   
      - beforebegin
      - afterbegin
      - beforeend
      - afterend
      
   - element.innerHTML

   - .blur()

   - shouldn't overuse chaining methods, may caus performance issues when dealing with large arrrays. Try to acheive the functionality while using the shortest possible chain. 

   - bad practice in JS to chain methods that mutate the underlying original array.

   - button element in a form element. In html the default behaviour when we click a submit button is for the page to reload. https://codemia.io/knowledge-hub/path/how_to_prevent_buttons_from_submitting_forms. When we hit enter from one of the form inputs it will automatically trigger the click event on the button.

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  const _dogsJulia = structuredClone(dogsJulia);
  _dogsJulia.pop();
  _dogsJulia.pop();
  _dogsJulia.shift();
  const allDogs = _dogsJulia.concat(dogsKate);

  allDogs.forEach(function (dog, idx) {
    if (dog >= 3) console.log(`Dog number ${idx + 1} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
  });
};

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
checkDogs(juliaData, kateData);
console.log(juliaData);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) {
  const humanYrs = ages.map((curr) => (curr <= 2 ? 2 * curr : 4 * curr + 16));
  const minAge = humanYrs.filter((curr) => curr >= 18);
  const avg = minAge.reduce((acc, curr, _, arr) => acc + curr / arr.length, 0);
  console.log(avg);
};
calcAverageHumanAge(ages1);
calcAverageHumanAge(ages2);
*/

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
  ];  
  
  const huskyWeight = breeds.find((dog) => dog.breed === 'Husky')?.averageWeight;
  console.log(huskyWeight);
  
  const dogBothActivities = breeds.find(
    (dog) => dog.activities.includes('running') && dog.activities.includes('fetch')
  ).breed;
  console.log(dogBothActivities);
  
  const uniqueActivities = [...new Set(breeds.flatMap((dog) => dog.activities))];
  console.log(uniqueActivities);
  
  const swimmingAdjacent = [
   ...new Set(
      breeds
         .filter((dog) => dog.activities.includes('swimming'))
         .flatMap((dog) => dog.activities)
         .filter((activity) => activity != 'swimming')
   ),
   ];
  console.log(swimmingAdjacent);

  
  console.log(breeds.every((dog) => dog.averageWeight >= 10));
  
  console.log(breeds.some((dog) => dog.activities.length >= 3));
  
  console.log(Math.max(...breeds.filter((dog) => dog.activities.includes('fetch')).map((dog) => dog.averageWeight)));

*/

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀

dogs.forEach(function (curr, idx, arr) {
  const recommendedFood = Math.floor(curr.weight ** 0.75 * 28);
  curr.recFood = recommendedFood;
});

// console.log(dogs);

const dogSarah = dogs.find(function (curr, idx, arr) {
  return curr.owners.includes('Sarah');
});
// console.log(`Sarah's dog eats too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

let { ownersTooMuch, ownersTooLittle } = Object.groupBy(dogs, (curr, idx) =>
  curr.curFood > curr.recFood ? 'ownersTooMuch' : 'ownersTooLittle'
);

ownersTooLittle = ownersTooLittle.flatMap((curr, idx, arr) => curr.owners);
ownersTooMuch = ownersTooMuch.flatMap((curr, idx, arr) => curr.owners);

// console.log(ownersTooLittle);
// console.log(ownersTooMuch);

// console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`);
// console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`);

// console.log(dogs.some((curr, idx, arr) => curr.curFood === curr.recFood));

// trying to chain condition like a < b < c isn't working as expected
// console.log(dogs.every((curr, idx, arr) => curr.recFood * 0.9 < curr.curFood && curr.curFood < curr.recFood * 1.1));

const dogsOkey = dogs.filter((curr) => curr.recFood * 0.9 < curr.curFood && curr.curFood < curr.recFood * 1.1);
// console.log(dogsOkey);

const dogGroups = Object.groupBy(dogs, (curr, idx) =>
  curr.curFood === curr.recFood ? 'exact' : curr.curFood > curr.recFood ? 'too-much' : 'too-little'
);

// console.log(dogGroups);

const numOwnersGroups = Object.groupBy(dogs, ({ owners }) => `${owners.length}-owners`);
// console.log(numOwnersGroups);

// console.log(dogs.toSorted(({ recFood: curr }, { recFood: next }) => curr - next));
*/
