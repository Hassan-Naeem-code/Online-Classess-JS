// _________________________________________Firebase Constant______________________________________

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
//  Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();

function signup(e) {
  const name = document.getElementById("name");
  const fathername = document.getElementById("fathername");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const age = document.getElementById("age");
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var user_uid = user.uid;
      database
        .collection("users")
        .doc(user_uid)
        .set({
          name: name.value,
          email: email.value,
          fatherName: fathername.value,
          age: age.value,
          user_id: user_uid,
        })
        .then((doc) => {
          name.value = "";
          fathername.value = "";
          email.value = "";
          password.value = "";
          age.value = "";
          alert("Signup Successfully");
          window.location.href = "login.html";
        })
        .catch((error) => {
          console.log("error is", error);
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
      // ..
    });
}
