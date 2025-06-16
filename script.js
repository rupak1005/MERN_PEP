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

// Class definition and instantiation
class yo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const obj1 = new yo('ankit', 22);
console.log('name = ' + obj1.name); // Accessing class instance property
