console.log("Hello World");

// document.write("Hello World");

// alert("Hello World");

var firstName = "Hanzala";
var lastName = "Shakeel";
var a = "SMith";
var b = "Pointer";
var c = 1;
var d = 10;

console.log("A Value", a);
console.log("B Value", b);
console.log("C Value", c);
console.log("D Value", d);

console.log("Hanzala Shakeel");
console.log(firstName + " " + lastName);

console.log("For Mathematical Operation", c + d);
console.log("For Mathematical Operation", c * d);
console.log("For Mathematical Operation", c - d);
console.log("For Mathematical Operation", c / d);
console.log("For Mathematical Operation", c % d);

// var userInput = prompt("ENter Your Name");

// document.write(userInput);

// console.log(typeof userInput);

// Return Types in JS

// Primitive Data Type: String Number Boolean Undefined Null

// parseInt , Number , + , parseFloat

// Non Primitive Referencing: Array Objects

// Condition in JS

// = Asigning a value to a variable

// == Comparing the value of a variable from a value

// === Comparing the value of a variable from a value with letter case check string or number

// var f = "friend";
// var e = "harry";

// if (e == "friend") {
//   document.write("E is A Friend");
// } else if (f == "harry") {
//   document.write("F is Harry");
// } else {
//   document.write("Both DOnt run");
// }

// var userInput = prompt("ENter Your Name");
// if (userInput == "Hanzala") {
//   document.write(userInput);
// } else {
//   document.write("No Name Exist");
// }

var userName = prompt("Enter Your Name");
var userBreakFastTiming = +prompt("Enter Your BreakFast Timing");
var userLunchTiming = +prompt("Enter Your Lunch Timing");
var userDinnerTiming = +prompt("Enter Your Dinner Timing");

document.write("Your Breakfaset Time is ", userBreakFastTiming, " ");
document.write("Your Lunch Time is ", userLunchTiming, " ");
document.write("Your Dinner Time is ", userDinnerTiming, " ");
