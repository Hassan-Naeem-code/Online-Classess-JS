// console.log("Class 9");

// for (var i = 1; i <= 10; i++) {
//   console.log("value", i, "increment", i + i - 1);
// }

// ForEach Loop
// It uses only for Arrays

var array = [0, 2, 3, 4, 5];
// for (var i = 0; i < array.length; i++) {
//   console.log("element,index", array[i], "index", i);
// }
array.forEach((element, index) => {
  console.log("element,index", element, index);
});
