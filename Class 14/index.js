let body = document.getElementsByTagName("body");

function changeBackgroundColorOfBody(color) {
  body[0].style.backgroundColor = color;
}

function remainTheSameBackground() {
  body[0].style.backgroundColor = "";
}
