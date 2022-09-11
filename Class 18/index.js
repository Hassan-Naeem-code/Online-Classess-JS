// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
//  Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();

let myName = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let myEmail = document.getElementById("email");
let myPassword = document.getElementById("password");
let submitBtn = document.getElementById("get-submit-button");
let currentLocation = window.location;

window.addEventListener("load", function () {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      if (currentLocation.href.includes("home")) {
      } else {
        currentLocation.href = "home.html";
      }
    }
  });

  if (currentLocation.href.includes("login")) {
    submitBtn.setAttribute("onclick", "loginUser()");
  } else if (currentLocation.href.includes("signup")) {
    submitBtn.setAttribute("onclick", "signupUser()");
  } else {
    console.log("No work done in else");
  }
});

const signupUser = () => {
  auth.signOut();
  auth
    .createUserWithEmailAndPassword(myEmail.value, myPassword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var user_uid = user.uid;
      console.log("signupUser user", user);
      database
        .collection("users")
        .doc(user_uid)
        .set({
          name: myName.value,
          email: myEmail.value,
          fatherName: fatherName.value,
          user_id: user_uid,
        })
        .then((doc) => {
          myName.value = "";
          fatherName.value = "";
          myEmail.value = "";
          myPassword.value = "";
          console.log("error is", doc);
          alert("Signup Successfully");
          currentLocation.href = "login.html";
        })
        .catch((error) => {
          console.log("error is", error);
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
const loginUser = () => {
  auth
    .signInWithEmailAndPassword(myEmail.value, myPassword.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("loginUser user", user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};
const signOut = () => {
  auth.signOut().then(function () {
    localStorage.clear();
    currentLocation.href = "login.html";
  });
};
