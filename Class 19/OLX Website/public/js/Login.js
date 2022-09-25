// _________________________________________Firebase Constant______________________________________

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

function loginUser(e) {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (email.value == "") {
    alert("Please enter your email");
    return;
  }
  if (password.value == "") {
    alert("Please enter your password");
    return;
  }
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("Login Successfully");
      window.location.href = "olx.html";
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}
