// _________________________________________Firebase Constant______________________________________

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
//  Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

// ___________________________________________Navbar________________________________________________

let move_icon = document.getElementById("move-icon");
let text = document.getElementById("text");
let list = document.getElementById("list");
let search_blue = document.getElementById("search-box");
let header = document.getElementById("header");
let bodyPostWrapper = document.getElementById("First_row");
let unsubscribe;

function show() {
  list.classList.toggle("show");
  move_icon.classList.toggle("rotate");
}

function myfunc(location) {
  text.innerHTML = location;
}

function outline_blue() {
  search_blue.style.outlineColor = "aqua";
}

function login() {
  window.location.href = "model.html";
}
function logOut() {
  auth.signOut().then(function () {
    localStorage.clear();
    alert("LogOut Successfully");
    window.location.reload();
  });
}

function addpost() {
  window, (location.href = "addpost.html");
}

window.addEventListener("load", () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      printHeader(user);
    } else {
      printHeader();
    }
  });
  unsubscribe = database.collection("post").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const dataFromFirebase = change.doc.data();
        if (dataFromFirebase) {
          getAllPosts(dataFromFirebase);
        }
      }
      // if (change.type === "modified") {
      //   console.log("Modified users: ", change.doc.data());
      //   const dataFromFirebase = change.doc.data();
      //   if (dataFromFirebase) {
      //     printUiForUsers(dataFromFirebase);
      //   }
      // }
      // if (change.type === "removed") {
      //   const dataFromFirebase = change.doc.data();
      //   console.log("dataFromFirebase delete", dataFromFirebase);
      // }
    });
  });
  return () => {
    // Stop listening to changes
    unsubscribe();
  };
});
function printHeader(user) {
  const parentNavbar = document.createElement("div");
  parentNavbar.setAttribute("class", "navbar");
  const navbarLogo = document.createElement("img");
  navbarLogo.setAttribute("src", "images/olx_logo.png");
  navbarLogo.setAttribute("alt", "logo");
  const navbarLocation = document.createElement("div");
  navbarLocation.setAttribute("class", "location-box");
  navbarLocation.setAttribute("onclick", "show(this)");
  const navbarLocationWrapper = document.createElement("div");
  navbarLocationWrapper.setAttribute("class", "select-location");
  const navbarLocationTextParagraph = document.createElement("p");
  navbarLocationTextParagraph.innerHTML = "Select Your Location";
  navbarLocationTextParagraph.setAttribute("id", "text");
  const navbarLocationIcon = document.createElement("i");
  navbarLocationIcon.setAttribute("class", "fa-solid fa-chevron-down");
  navbarLocationIcon.setAttribute("id", "move-icon");
  navbarLocationWrapper.appendChild(navbarLocationTextParagraph);
  navbarLocationWrapper.appendChild(navbarLocationIcon);
  navbarLocation.appendChild(navbarLocationWrapper);
  const navbarLocationSelectionDropdown = document.createElement("ul");
  navbarLocationSelectionDropdown.setAttribute("class", "option-box");
  navbarLocationSelectionDropdown.setAttribute("id", "list");
  const navbarLocationSelectionDropdownMenu = document.createElement("li");
  navbarLocationSelectionDropdownMenu.setAttribute("class", "option");
  navbarLocationSelectionDropdownMenu.setAttribute(
    "onclick",
    "myfunc('Use current location')"
  );
  const navbarLocationSelectionDropdownMenuItemIcon =
    document.createElement("i");
  navbarLocationSelectionDropdownMenuItemIcon.setAttribute(
    "class",
    "fa-solid fa-location-crosshairs blue"
  );
  const navbarLocationSelectionDropdownMenuItemText =
    document.createElement("p");
  navbarLocationSelectionDropdownMenuItemText.innerHTML =
    "Use current location";
  navbarLocationSelectionDropdownMenuItemText.setAttribute("class", "blue");
  navbarLocationSelectionDropdownMenu.appendChild(
    navbarLocationSelectionDropdownMenuItemIcon
  );
  navbarLocationSelectionDropdownMenu.appendChild(
    navbarLocationSelectionDropdownMenuItemText
  );
  navbarLocationSelectionDropdown.appendChild(
    navbarLocationSelectionDropdownMenu
  );
  const navbarSearchWrapper = document.createElement("div");
  navbarSearchWrapper.setAttribute("class", "search-box");
  const navbarSearchInput = document.createElement("input");
  navbarSearchInput.setAttribute("onclick", "outline_blue()");
  navbarSearchInput.setAttribute("type", "text");
  navbarSearchInput.setAttribute("class", "search");
  navbarSearchInput.setAttribute("id", "search-box");
  navbarSearchInput.setAttribute(
    "placeholder",
    "Find Cars, Mobile Phones and more..."
  );
  const navbarSearchIconWrapper = document.createElement("p");
  const navbarSearchIcon = document.createElement("i");
  navbarSearchIcon.setAttribute("class", "fa-solid fa-magnifying-glass");
  navbarSearchIconWrapper.appendChild(navbarSearchIcon);
  navbarSearchWrapper.appendChild(navbarSearchInput);
  navbarSearchWrapper.appendChild(navbarSearchIconWrapper);
  const loginWrapper = document.createElement("div");
  loginWrapper.setAttribute("class", "login-button");
  const loginWrapperText = document.createElement("p");
  if (user) {
    loginWrapperText.innerHTML = "LogOut";
    loginWrapper.setAttribute("onclick", "logOut()");
  } else {
    loginWrapperText.innerHTML = "Login";
    loginWrapper.setAttribute("onclick", "login()");
  }
  loginWrapper.appendChild(loginWrapperText);
  const sellWrapper = document.createElement("p");
  sellWrapper.setAttribute("class", "sell_button");
  const sellWrapperButton = document.createElement("button");
  const sellWrapperIcon = document.createElement("i");
  sellWrapperIcon.setAttribute("class", "fa-regular fa-plus");
  const sellWrapperText = document.createElement("p");
  if (user) {
    sellWrapperText.setAttribute("onclick", "addpost()");
  } else {
    sellWrapperText.setAttribute("onclick", "login()");
  }
  sellWrapperText.innerHTML = "SELL";
  sellWrapperButton.appendChild(sellWrapperIcon);
  sellWrapperButton.appendChild(sellWrapperText);
  sellWrapper.appendChild(sellWrapperButton);
  parentNavbar.appendChild(navbarLogo);
  parentNavbar.appendChild(navbarLocation);
  parentNavbar.appendChild(navbarSearchWrapper);
  parentNavbar.appendChild(loginWrapper);
  parentNavbar.appendChild(sellWrapper);
  header.appendChild(parentNavbar);
}
/* ___________________________________________Product________________________________________________ */
function getAllPosts(data) {
  const postWrapper = document.createElement("div");
  postWrapper.setAttribute("class", "box");
  postWrapper.setAttribute("id", data?.user_id);
  const postInnerWrapperOne = document.createElement("div");
  postInnerWrapperOne.setAttribute("class", "img-box");
  const postInnerWrapperImage = document.createElement("img");
  postInnerWrapperImage.setAttribute("src", data?.postImage);
  postInnerWrapperImage.setAttribute("alt", data?.postImage);
  postInnerWrapperOne.appendChild(postInnerWrapperImage);
  const postInnerWrapperSecond = document.createElement("div");
  postInnerWrapperSecond.setAttribute("class", "addres_data");
  const postInnerWrapperSecondLocation = document.createElement("p");
  postInnerWrapperSecondLocation.innerHTML = data?.postLocation;
  postInnerWrapperSecond.appendChild(postInnerWrapperSecondLocation);
  const postInnerHeading = document.createElement("p");
  postInnerHeading.innerHTML = data?.postTitle;
  const postInnerDescription = document.createElement("p");
  postInnerDescription.innerHTML = data?.postDescription;
  const postInnerPrice = document.createElement("h2");
  postInnerPrice.innerHTML = data?.postPrice;
  postWrapper.appendChild(postInnerWrapperOne);
  postWrapper.appendChild(postInnerHeading);
  postWrapper.appendChild(postInnerDescription);
  postWrapper.appendChild(postInnerPrice);
  postWrapper.appendChild(postInnerWrapperSecond);
  bodyPostWrapper.appendChild(postWrapper);
}
