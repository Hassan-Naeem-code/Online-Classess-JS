console.log("Class 15");

console.log(window);

// Location In Javascript
// var obj = {
//   name: "Hanzal",
//   fullName: "Hanzala Shakeel",
// };

// window.location.href = "https://www.google.com";

// Local Storage

function submitLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email !== "" && password !== "") {
    let saveLoginUser = {
      email,
      password,
    };
    localStorage.setItem("login_user", JSON.stringify(saveLoginUser));
  } else {
    alert("Please Fill The Empty Form Fields");
  }
}

function getLocalStorageData() {
  let getUserData = JSON.parse(localStorage.getItem("login_user"));
  console.log("getUserData", getUserData);
  if (getUserData !== null) {
    document.write(
      "Email is",
      getUserData.email,
      "Password is",
      getUserData.password
    );
  }
}

function clearLocalStorageData() {
  localStorage.clear();
}
