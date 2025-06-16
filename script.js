"use strict"
// Array operations

// const arr=["ankit","rupak",1,2];

// Using forEach to iterate over array elements
// arr.forEach(function(i){
//     console.log(i);
// })

// Adding an element to the array
// arr.push("legend");

// Using for...of to iterate over array values
// for(var i of arr){
//     console.log(i);
// }

// Using for...in to iterate over array indices
// for(var i in arr){
//     console.log(arr[i]);
// }

// Object creation and property access
var obj = {
    name: 'rupak',
    age: 21
}
console.log('name = ' + obj.name); // Accessing object property

for(var i in obj){
    console.log(i,":",obj[i])
}
// Class definition and instantiation
/**
 * Represents a person with a name and age.
 *
 * @class yo
 * @classdesc This class is used to create an object representing a person, storing their name and age as properties.
 *
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 *
 * @example
 * const person = new yo('Alice', 30);
 * console.log(person.name); // 'Alice'
 * console.log(person.age);  // 30
 */
class yo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const obj1 = new yo('ankit', 22);
console.log('name = ' + obj1.name); // Accessing class instance property

{
    var a=1
}
console.log(a)

// Notes: Function Arguments and Parameters in JavaScript

// - JavaScript functions are flexible with arguments:
//   - You can call a function with more, fewer, or exactly the number of parameters it declares.
//   - No error is thrown if the number of arguments doesn't match the number of parameters.

// - Parameters vs. Arguments:
//   - Parameters: Named variables in the function definition.
//   - Arguments: Actual values passed when calling the function.

// - The 'arguments' object:
//   - Every non-arrow function has access to an array-like 'arguments' object.
//   - It contains all arguments passed to the function, even if no parameters are declared.

// Example:
/**
 * Logs the arguments object to the console.
 * 
 * @function
 * @returns {void}
 * @note This function does not accept any named parameters, 
 * but can access all arguments passed to it via the `arguments` object.
 */
function noParams() {
    console.log(arguments);
}
noParams(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

// - Extra arguments are available in 'arguments'.
// - Missing parameters are set to undefined.
// - JavaScript does not enforce arity (number of parameters).

// Notes: Function Declarations vs. Arrow Functions

// 1. Function Declaration
// - Traditional way to define a function.
// - Can be hoisted (used before declaration).
function multiply1(a, b) {
    return a + b; // Note: This actually adds, not multiplies.
}

// 2. Arrow Function
// - Introduced in ES6.
// - Shorter syntax, does not have its own 'this' or 'arguments'.
const multiply = (a, b) => a * b;

// Example usage:
console.log(multiply(2, 4)); // Output: 8