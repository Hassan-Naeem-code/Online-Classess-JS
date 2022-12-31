// script for hamburger to hide or show

let users_window = document.querySelector(".users-window");

function show_hide() {
  if (users_window.style.display == "block") {
    users_window.style.display = "none";
  } else {
    users_window.style.display = "block";
  }
}

// script for printing users on UI

const auth = firebase.auth();
const database = firebase.firestore();
let current_location = window.location;

let myUsersList = document.getElementById("users_list");

window.addEventListener("load", function () {
  auth.onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log("uid", uid);
      database
        .collection("users")
        .where("user_uid", "!=", uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            printUsersList(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  });
});

function printUsersList(userData) {
  let wrapper = document.createElement("li");
  let userImage = document.createElement("img");
  let wrapperForUserName = document.createElement("div");
  let userName = document.createElement("h2");
  userImage.setAttribute("src", userData?.profile_image);
  userImage.setAttribute("alt", "user_image");
  userName.innerHTML = userData?.name;
  wrapperForUserName.appendChild(userName);
  wrapper.appendChild(userImage);
  wrapper.appendChild(wrapperForUserName);
  myUsersList.appendChild(wrapper);
}

const signOut = () => {
  auth.signOut().then(function () {
    current_location.href = "login.html";
  });
};
