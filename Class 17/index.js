// Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();

const sendData = () => {
  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  database
    .collection("users")
    .add({
      name: name,
      fatherName: fatherName,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};
