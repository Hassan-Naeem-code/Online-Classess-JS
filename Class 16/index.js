console.log("Class 16");

let getUl = document.getElementById("html_ul");

let createLi = document.createElement("li");
createLi.classList.add("custom_class");
createLi.classList.remove("custom_class");
createLi.setAttribute("id", "testing_id");
createLi.removeAttribute("id");
createLi.append("hello");

getUl.appendChild(createLi);
