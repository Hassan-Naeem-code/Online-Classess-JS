// _________________________________________Firebase Constant______________________________________

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
//  Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

let currentUser = null;

window.addEventListener("load", () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      currentUser = user;
      console.log("currentUser", currentUser);
    } else {
      currentUser = null;
    }
  });
});

let dropdown = document.getElementById("dropdown");

let brand_box = document.getElementById("brand-box");

let move_icon = document.getElementById("move-icon");

let hidden = document.getElementById("hidden");

let location_box = document.getElementById("location-box");

let move_icon2 = document.getElementById("move-icon2");

function toggle() {
  dropdown.classList.toggle("hidden");
  move_icon.classList.toggle("move");
}

function select_brand(value) {
  brand_box.innerHTML = value;
}

function toggle2() {
  hidden.classList.toggle("hidden2");
  move_icon2.classList.toggle("move2");
}
function select_location(value2) {
  location_box.innerHTML = value2;
}
function postAdd(e) {
  const postTitle = document.getElementById("postTitle");
  const postDescription = document.getElementById("postDescription");
  const postBrand = brand_box;
  const postPrice = document.getElementById("commodityPrice");
  const postLocation = location_box;
  const postUserName = document.getElementById("postUserName");
  const postUserNumber = document.getElementById("postUserNumber");
  if (postTitle.value == "") {
    alert("Please enter post title");
    return;
  }
  if (postDescription.value == "") {
    alert("Please enter post description");
    return;
  }
  if (postBrand.innerHTML == "") {
    alert("Please select post brand");
    return;
  }
  if (postPrice.value == "") {
    alert("Please enter post price");
    return;
  }
  if (postLocation.innerHTML == "") {
    alert("Please select post location");
    return;
  }
  if (postUserName.value == "") {
    alert("Please enter post host name");
    return;
  }
  if (postUserNumber.value == "") {
    alert("Please enter post host number");
    return;
  }
  database
    .collection("post")
    .doc(currentUser.uid)
    .set({
      postTitle: postTitle.value,
      postDescription: postDescription.value,
      postBrand: postBrand.innerHTML,
      postPrice: postPrice.value,
      postLocation: postLocation.innerHTML,
      postUserName: postUserName.value,
      postUserNumber: postUserNumber.value,
      user_id: currentUser.uid,
    })
    .then((doc) => {
      alert("Post Added Successfully");
      window.location.href = "olx.html";
    })
    .catch((error) => {
      console.log("error is", error);
    });
}
