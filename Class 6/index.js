console.log("CLass 6");

var hanzala = {
  name: "ABC",
  class: "VII A",
  address: "XYZ",
  color: "Black",
};

console.log("hanzala", hanzala);

delete hanzala.color;
hanzala.name = "XYZ";
hanzala.school = "School";
console.log("hanzala", hanzala);

// Array Of Objects

var arrayOfObject = [
  {
    name: "ABC",
    class: "VII A",
    address: "XYZ",
    color: "Black",
  },
  {
    name: "ABC",
    class: "VII A",
    address: "XYZ",
    color: "Black",
  },
  {
    name: "ABC",
    class: "VII A",
    address: "XYZ",
    color: "Black",
  },
];

console.log("arrayOfObject", arrayOfObject);

// var staticArray = [];

// for (var i = 0; i <= 3; i++) {
//   var user_input = prompt("Enter a Key Here");
//   var normalObj = {
//     [user_input]: "Static Value",
//   };
//   staticArray.push(normalObj);
// }

// console.log("staticArray", staticArray);

// var wrapper = document.getElementById("container");

// staticArray.forEach((value) => {
//   wrapper.innerHTML = eval(value);
// });

// Date

var currentDate = new Date();
console.log("currentDate", currentDate);
console.log(
  "currentDate Time",
  currentDate.getHours() +
    " : " +
    currentDate.getMinutes() +
    " : " +
    currentDate.getSeconds()
);
console.log(
  "currentDate Date",
  currentDate.getDate() +
    " : " +
    currentDate.getMonth() +
    " : " +
    currentDate.getFullYear()
);

// Functions

function abc() {
  console.log("Function is Running");
}

abc();

function printName(firstName, lastName) {
  console.log("My Name Is:", firstName + " " + lastName);
}

printName("Hanzala", "Shakeel");

function printNames(firstName = "Hanzala", lastName = "Shakeel") {
  console.log("My Name Is:", firstName + " " + lastName);
}

printName("ABC",'XYZ');
