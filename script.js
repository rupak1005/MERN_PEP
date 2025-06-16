// "use strict"
// // Array operations

// // const arr=["ankit","rupak",1,2];

// // Using forEach to iterate over array elements
// // arr.forEach(function(i){
// //     console.log(i);
// // })

// // Adding an element to the array
// // arr.push("legend");

// // Using for...of to iterate over array values
// // for(var i of arr){
// //     console.log(i);
// // }

// // Using for...in to iterate over array indices
// // for(var i in arr){
// //     console.log(arr[i]);
// // }

// // Object creation and property access
// var obj = {
//     name: 'rupak',
//     age: 21
// }
// console.log('name = ' + obj.name); // Accessing object property

// for(var i in obj){
//     console.log(i,":",obj[i])
// }
// // Class definition and instantiation
// /**
//  * Represents a person with a name and age.
//  *
//  * @class yo
//  * @classdesc This class is used to create an object representing a person, storing their name and age as properties.
//  *
//  * @param {string} name - The name of the person.
//  * @param {number} age - The age of the person.
//  *
//  * @example
//  * const person = new yo('Alice', 30);
//  * console.log(person.name); // 'Alice'
//  * console.log(person.age);  // 30
//  */
// class yo {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const obj1 = new yo('ankit', 22);
// console.log('name = ' + obj1.name); // Accessing class instance property

// {
//     var a=1
// }
// console.log(a)

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
//  * 
//  * @function
//  * @returns {void}
//  * @note This function does not accept any named parameters, 
 * but can access all arguments passed to it via the `arguments` object.
 */
// function noParams() {
//     console.log(arguments);
// }
// noParams(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }

// - Extra arguments are available in 'arguments'.
// - Missing parameters are set to undefined.
// - JavaScript does not enforce arity (number of parameters).

// Notes: Function Declarations vs. Arrow Functions

// 1. Function Declaration
// - Traditional way to define a function.
// - Can be hoisted (used before declaration).
// function multiply1(a, b) {
//     return a + b; // Note: This actually adds, not multiplies.
// }

// 2. Arrow Function
// - Introduced in ES6.
// - Shorter syntax, does not have its own 'this' or 'arguments'.
// const multiply = (a, b) => a * b;

// // Example usage:
// console.log(multiply(2, 4)); // Output: 8



// /concatenate

// console.log(1+'1')
// console.log(2+4)
// console.log("hello"+"world")

// console.log(1-"1")


    // slice() extracts a part of the string based on the given starting-index and ending-index and returns a new string.
    // substring() returns the part of the given string from the start index to the end index. Please see String.slice and String.substring for details.
    // substr() This method returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.
    // replace() replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.
    // replaceAll() returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.
    // toUpperCase() converts all the characters present in the String to upper case and returns a new String with all characters in upper case. This method accepts a single parameter stringVariable string that you want to convert in upper case.
    // toLowerCase() converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase.
    // trim() is used to remove either white spaces from the given string. This method returns a new string with removed white spaces. This method is called on a String object. This method doesn't accept any parameter.
    // trimStart() removes whitespace from the beginning of a string. The value of the string is not modified in any manner, including any whitespace present after the string.
    // trimEnd() removes white space from the end of a string. The value of the string is not modified in any manner, including any white-space present before the string.
    // padStart() pad a string with another string until it reaches the given length. The padding is applied from the left end of the string.
    // padEnd() pad a string with another string until it reaches the given length. The padding is applied from the right end of the string.
    // charAt() returns the character at the specified index.
    // charCodeAt() returns a number that represents the Unicode value of the character at the specified index. This method accepts one argument.
    // split() splits the string into an array of sub-strings. This method returns an array. This method accepts a single parameter character on which you want to split the string.

//     // Define a string variable 
// let A = 'Geeks for Geeks';

// // Use the slice() method to extract a substring
// let b = A.slice(0, 5);
// let c = A.slice(6, 9);
// let d = A.slice(10);

// // Output the value of variable
// console.log(b);
// console.log(c);
// console.log(d);
// // Define a string variable
// let str = "Mind, Power, Soul";

// // Use the substring() method to extract a substring 
// let part = str.substring(6, 11);

// // Output the value of variable
// console.log(part);

// // Define a string variable 'str'
// let str = "Mind, Power, Soul";

// // Use the substr() method to extract a substring f
// let part = str.substr(6, 5);

// // Output the value of variable
// console.log(part);


// // Define a string variable 'str' 
// let str = "Mind, Power, Soul";

// // Use the replace() method to replace the substring
// let part = str.replace("Power", "Space");

// // Output the resulting string after replacement
// console.log(part);

// // Define a string variable 'str'
// let str = "Mind, Power, Power, Soul";

// // Use the replaceAll() method to replace all occurrences
// //of "Power" with "Space" in the string 'str'
// let part = str.replaceAll("Power", "Space");

// // Output the resulting string after replacement
// console.log(part);
// // Define a string variable
// let gfg = 'GFG ';

// // Define another string variable 
// let geeks = 'stands-for-GeeksforGeeks';

// // Convert the string 'geeks' to uppercase using the toUpperCase() method
// console.log(geeks.toUpperCase());

// // Define a string variable
// let gfg = 'GFG ';

// // Define a string variable 
// let geeks = 'stands-for-GeeksforGeeks';

// // Convert the string 'geeks' to lowercase using the toLowerCase() method
// console.log(geeks.toLowerCase());

// let gfg = 'GFG ';
// let geeks = 'stands for GeeksforGeeks';

// // Accessing concat method on an object
// // of String passing another object 
// // as a parameter
// console.log(gfg.concat(geeks));

// let gfg = 'GFG    ';
// let geeks = 'stands-for-GeeksforGeeks';

// // Storing new object of string
// // with removed white spaces
// let newGfg = gfg.trim();

// // Old length
// console.log(gfg.length);

// // New length
// console.log(newGfg.length)

// // Define a string variable 
// let str = "  Soul";

// // Output the original value of the string 
// console.log(str);

// // Use the trimStart() method to remove leading whitespace from the string 'str'
// let part = str.trimStart();

// // Output the resulting string after removing leading whitespace
// console.log(part);

// // Define a string variable 
// let str = "Soul  ";

// // Output the original value of the string 'str'
// console.log(str);

// // Use the trimEnd() method to remove trailing whitespace from the string 'str'
// let part = str.trimEnd();

// // Output the resulting string after removing trailing whitespace
// console.log(part);
// // Define a string variable 
// let stone = "Soul";

// // Use the padStart() method to add padding characters "Mind "
// //to the beginning of the string 'stone' 
// stone = stone.padStart(9, "Mind ");

// // Output the resulting string after padding
// console.log(stone);

// function trim(str) {
//     let startInd = 0;
//     let endInd = str.length - 1;

    
//     while (startInd <= endInd && str[startInd] === " ") {
//         startInd++;
//     }

    
//     while (endInd >= startInd && str[endInd] === " ") {
//         endInd--;
//     }

//     return str.slice(startInd, endInd + 1);
// }

// const result = trim("  hello world  ");
// console.log(result); 


// slice vs substring?

// 1. Negative Indexes

//     slice() allows negative indexes, which count from the end of the string:

// js
// 'abcdef'.slice(-3); // 'def'

// substring() treats negative values as 0:

//     js
//     'abcdef'.substring(-3); // 'abcdef'

// 2. Argument Order

//     If the start index is greater than the end index:

//         slice() returns an empty string:

// js
// 'abcdef'.slice(4, 2); // ''

// substring() swaps the arguments:

//         js
//         'abcdef'.substring(4, 2); // 'cd'

// 3. Use with Arrays

//     slice() can also be used with arrays to extract elements.

//     substring() is only for strings

//     .

// 4. Recommendation

//     Use slice() for most string extraction tasks, especially if you need negative indexes.

//     Use substring() only if you specifi