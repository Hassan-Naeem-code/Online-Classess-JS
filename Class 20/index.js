console.log("Learning JS");

setTimeout(() => {
  console.log("Learning JS in setTimeout");
  callApi();
}, 3000);

//  Built In Status while using Asynchronus Javascript

// 200 (Success) request done successfully
// 201 (created) request created successfully
// 400 (error) request not done properly
// 404 (not found) request not found on server
// 500 (internal server error)

function callApi() {
  fetch("https://dummyjson.com/products")
    .then((hanzala) => hanzala.json())
    .then((yasir) => console.log("response", yasir))
    .catch((error) => console.log("error", error));
}

function colorTheBlock(backgroundColor,color, text) {
  const captureTheBlock = document.getElementById("demo");
  captureTheBlock.style.backgroundColor = backgroundColor;
  captureTheBlock.style.color = color;
  captureTheBlock.innerHTML = text;
}
// promise

let promise = new Promise(function (resolve, reject) {
  // if condition run successfully then resolve will automatically called
  let x = 0;
  if (x == 0) {
    let referenceObject = {
      backgroundColor: "green",
      color: "white",
      text: "condition is true",
    };
    resolve(referenceObject);
  }
  // if condition donot run successfully then reject will be called automatically
  else {
    let referenceObject = {
      backgroundColor: "red",
      color: "white",
      text: "condition is false",
    };
    reject(referenceObject);
  }
});

promise
  .then((resolve) => {
    console.log("resolve", resolve?.text);
    colorTheBlock(resolve?.backgroundColor, resolve?.color, resolve?.text);
  })
  .catch((reject) => {
    console.log("reject", reject?.text);
    colorTheBlock(resolve?.backgroundColor, reject?.color, reject?.text);
  });
