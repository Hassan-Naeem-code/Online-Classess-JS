// For Loop

// for (var i = 0; i <= 5; i++) {
//   console.log(i);
// }

// String Methods:

// Replace, toUpperCase, toLowerCase, concat, trim, charCodeAt, charAt,split, slice, substring, substr.

var alphabet =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled";

var convertedAlphabet = alphabet.split(".");

// console.log("convertedAlphabet", convertedAlphabet);

// for (var i = 0; i <= convertedAlphabet.length; i++) {
//   console.log("convertedAlphabet[i]", convertedAlphabet[i]);
// }

var firstName = "Hanzala";
var lastName = " Shakeel";

// console.log(firstName.concat(lastName));

var stringFor = "Lorem Ipsum";
// Substring method to get the value from a string from specifying number to the required number

console.log("stringFor", stringFor.substring(0, 4));

console.log("stringFor Trime()", stringFor.trim());

// Return the value at the given chartAt(number)

console.log("stringFor Trime()", stringFor.charAt(4));

// Return the corresponding number of the string element

console.log("stringFor Trime()", stringFor.charCodeAt(4));

// Non Primitive Array && Object

// Declaring an array

var array = [
  "Mango",
  "Banana",
  "Orange",
  "Grapes",
  "Lime",
  10,
  50,
  "Hanzala",
  100,
];

// Declaring an Array with JS class constructor for the assurity of pure Array

// var array1 = new Array(
//   "Mango",
//   "Banana",
//   "Orange",
//   "Grapes",
//   "Lime",
//   10,
//   50,
//   "Hanzala",
//   100
// );


// Add New element in the array in the end of the Array 
array.push("true");
array.push(200);
array.push("Shakeel");

// Remove 1 element from the end of the array

array.pop();

console.log("array", array);

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Splice method to add an element on our choosen place
 
// fruits.splice(2, 1, "Lemon", "Kiwi");

// Remove the first element of the array

// fruits.shift();

// Add new item in the array from the begining or from 0 Index

fruits.unshift(2, 0, "hello");

console.log("fruits", fruits);
