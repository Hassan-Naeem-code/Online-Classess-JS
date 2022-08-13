console.log("Class 13");

// forms

function formSubmit() {
  //   console.log("formSubmit", e);
  const first_name = document.getElementById("first_name");
  const last_name = document.getElementById("last_name");
  const father_name = document.getElementById("father_name");
  const mother_name = document.getElementById("mother_name");
  console.log(
    "first_name",
    first_name,
    "last_name",
    last_name,
    "father_name",
    father_name,
    "mother_name",
    mother_name
  );
}

// Mouse Functions

const getImage = document.getElementById("image");

function onmouseovers() {
  getImage.src =
    "https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  getImage.style.width = "100%";
  getImage.style.height = "300px";
}
function onmouseEnter() {
  getImage.style.transform = "scale(1.2)";
}
function onmouseLeave() {
  getImage.src =
    "https://images.unsplash.com/photo-1658577804731-80bb813dca36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  getImage.style.width = "100%";
  getImage.style.height = "300px";
}
