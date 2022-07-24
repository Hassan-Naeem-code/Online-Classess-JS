var sliderImages = [
  "https://images.unsplash.com/photo-1658577804731-80bb813dca36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1657299156594-50426d5125a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];
var slider_image = document.getElementById("slider_images");
var increment = 1;
setInterval(() => {
  if (sliderImages[increment + 1]) {
    slider_image.src = sliderImages[increment + 1];
    increment++;
  } else {
    slider_image.src = sliderImages[0];
    increment = 1;
  }
}, 1000);
