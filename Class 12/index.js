console.log("Running Js");

var array = ["car", "apple", "vegetable", "mobile phone"];

var object = {
  car: "puppy",
  apple: "puppy",
  vegetable: "puppy",
  "mobile phone": "puppy",
  array: ["apple", 0, 2, 4],
};

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i], "current index", i);
// }

// for (index in array) {
//   console.log("values", array[index], "index is", index);
// }

// forEach

// array.forEach((item, index) => {
//   console.log("item we found here", item, "and index is", index);
// });

// for (let iterate of array) {
//   console.log("iterate", iterate);
// }

// array.map((item, index) => {
//   console.log("array values", item, "array index", index);
// });

// object.array.forEach((item, index) => {
//   console.log("item", item);
// });

// Window

// Variable Initialisation

// Block and global scope

let name = "Hero";
name = "Hanzala";
// only intialised at once
const day = new Date().getDay();
// console.log("day is", day);
// console.log("name is", name);

// console.log("window", window);

// Class Activity

let getInput = document.getElementById("input_text");
let show_values = document.getElementById("show_values");
let allvalues = [];

function addValue() {
  allvalues.push(getInput.value);
  getInput.value = "";
}

function submitValue() {
  allvalues.map((item) => {
    show_values.value = item;
  });
}
