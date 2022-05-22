console.log("Class 2");

var getContainer = document.getElementById("container");
getContainer.style.backgroundColor = "#000";
getContainer.style.border = "10px solid red";
getContainer.classList.add("divWrapper");
console.log("console for id", getContainer);

// var getWrapper = document.getElementsByClassName("wrapper");
// console.log("console for className", getWrapper);

var getWrapperByQuery = document.querySelectorAll("div");

console.log("console for querySelector All", getWrapperByQuery);

for (var i = 0; i < getWrapperByQuery.length; i++) {
  console.log(
    "console for querySelector All in For Loop",
    getWrapperByQuery[i]
  );
  if (i == 0) {
    getWrapperByQuery[i].style.backgroundColor = "yellow";
  }
  if (i == 1) {
    getWrapperByQuery[i].style.backgroundColor = "green";
  }
  if (i == 2) {
    getWrapperByQuery[i].style.backgroundColor = "orange";
  }
}

// var getWrapperByQuery = document.querySelector("div");

// console.log("console for querySelector", getWrapperByQuery);

// For Loop

// for (var i = 0; i <= 5; i++) {
//   console.log(i);
// }
