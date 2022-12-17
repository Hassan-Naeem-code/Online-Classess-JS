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
