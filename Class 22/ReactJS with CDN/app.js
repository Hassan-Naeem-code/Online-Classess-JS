let where = document.getElementById("app");

let h1 = React.createElement(
  "h1",
  { id: "mainHeading", className: "form-control" },
  "Hello World"
);

let p = React.createElement(
  "p",
  {
    className: "color-black",
    style: {
      color: "coral",
      fontSize: "18px",
      letterSpacing: "1.5px",
    },
  },
  "Paragraph"
);
let h4 = React.createElement(
  "h4",
  {
    style: {
      fontSize: "19px",
    },
  },
  "H4 Tag"
);
let image = React.createElement("img", {
  src: "https://images.unsplash.com/photo-1671725501830-71073ba7eafc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  alt: "image",
  style: {
    width: "100%",
    height: "500px",
  },
});

let what = React.createElement(
  "div",
  { style: { backgroundColor: "grey", width: "100%" } },
  image,
  h1,
  p,
  h4
);

ReactDOM.render(what, where);
