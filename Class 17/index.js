// Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();
let myName = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
const getParentElementToPrintItChildUsers =
  document.getElementById("form-group");
let unsubscribe;

window.addEventListener("load", () => {
  unsubscribe = database.collection("users").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        console.log("New users: ", change.doc.data());
        const dataFromFirebase = change.doc.data();
        if (dataFromFirebase) {
          printUiForUsers(dataFromFirebase);
        }
      }
      if (change.type === "modified") {
        console.log("Modified users: ", change.doc.data());
      }
      if (change.type === "removed") {
        const dataFromFirebase = change.doc.data();
        console.log("dataFromFirebase delete", dataFromFirebase);
      }
    });
  });
  return () => {
    // Stop listening to changes
    unsubscribe();
  };
});

const printUiForUsers = (dataFromFirebase) => {
  const parentElement = document.createElement("div");
  const makeImageElement = document.createElement("img");
  makeImageElement.setAttribute("src", "assets/edit.png");
  makeImageElement.setAttribute("class", "img-responsive");
  makeImageElement.setAttribute("onclick", "pressDeleteUser(this)");
  makeImageElement.setAttribute("id", dataFromFirebase.id);
  const childElement = document.createElement("h2");
  const secondChildElement = document.createElement("h3");
  childElement.append("Name is: ", dataFromFirebase?.name);
  secondChildElement.append("Father Name is: ", dataFromFirebase?.fatherName);
  parentElement.appendChild(makeImageElement);
  parentElement.appendChild(childElement);
  parentElement.appendChild(secondChildElement);
  getParentElementToPrintItChildUsers.appendChild(parentElement);
};
const pressDeleteUser = (dataForUser) => {
  console.log("dataForUser", dataForUser.parentElement);
  const elementToGetId = dataForUser.id;
  const elementParent = dataForUser.parentElement;
  database
    .collection("users")
    .doc(elementToGetId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
      getParentElementToPrintItChildUsers.removeChild(elementParent);
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};
const sendData = () => {
  database
    .collection("users")
    .add({
      name: myName.value,
      fatherName: fatherName.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      database
        .collection("users")
        .doc(docRef.id)
        .set({
          name: myName.value,
          fatherName: fatherName.value,
          id: docRef.id,
        })
        .then((doc) => {
          myName.value = "";
          fatherName.value = "";
          console.log("error is", doc);
        })
        .catch((error) => {
          console.log("error is", error);
        });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};
