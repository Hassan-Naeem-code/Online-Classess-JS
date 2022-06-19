console.log("Class 7");

// Funtions

function abc() {
  console.log("Hellow");
}

// Arrow Function || Anonymous Function

var abc = () => {
  console.log("Hello World");
};

abc();

// Built In Mehtods In Js

// Normal JS Functions

// setInterval(function () {
//   console.log("Hanzala Shakeel");
// }, 1000);

// Anonymous JS Functions

// const result = setInterval(() => {
//   console.log("Hanzala Shakeel");
// }, 1500);

// TO stop the process of setInterval we use clearInterval

// clearInterval(result);

setTimeout(function () {
  console.log("Set Timeout");
}, 1000);

// Maths topics

var abc = Math.floor(Math.random() * 10 + 1);
console.log("abc Math random", abc);
// console.log("abc Math random", Math.random() * 10);

var floor = Math.floor(5.6); // works on -5 Radius
var ceil = Math.ceil(5.5); // works on 5 Radius

// console.log("floor Math ", floor);
// console.log("ceil Math ", ceil);

// Switch case JS

switch ("March") {
  case "Monday":
    alert("Today is a working day");
    break;
  case "Tuesday":
    alert("Today is a working day");
    break;
  case "Wednesday":
    alert("Today is a working day");
    break;
  case "Thursday":
    alert("Today is a working day");
    break;
  case "Friday":
    alert("Today is a working day");
    break;
  case "Saturday":
    alert("Hurrah! Today is a Weekend");
    break;
  case "Sunday":
    alert("Hurrah! Today is a Weekend");
    break;
  default:
    alert("Wrong Info");
}
