// Initialize Cloud Firestore and get a reference to the service
const database = firebase.firestore();

let myName = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let getSubmitButton = document.getElementById("get-submit-button");
const getParentElementToPrintItChildUsers =
  document.getElementById("form-group");
let unsubscribe;
let editElementId;

window.addEventListener("load", () => {
  unsubscribe = database.collection("todos").onSnapshot((snapshot) => {
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
        const dataFromFirebase = change.doc.data();
        if (dataFromFirebase) {
          printUiForUsers(dataFromFirebase);
        }
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
  const makeImageElementForEdit = document.createElement("img");
  makeImageElementForEdit.setAttribute("src", "assets/edit.png");
  makeImageElementForEdit.setAttribute("class", "img-responsive");
  makeImageElementForEdit.setAttribute("onclick", "pressEditUser(this)");
  makeImageElementForEdit.setAttribute("id", dataFromFirebase.id);
  const makeImageElementForDelete = document.createElement("img");
  makeImageElementForDelete.setAttribute("src", "assets/trash-bin.png");
  makeImageElementForDelete.setAttribute("class", "img-responsive");
  makeImageElementForDelete.setAttribute("onclick", "pressDeleteUser(this)");
  makeImageElementForDelete.setAttribute("id", dataFromFirebase.id);
  const childElement = document.createElement("h2");
  const secondChildElement = document.createElement("h3");
  childElement.append(dataFromFirebase?.name);
  secondChildElement.append(dataFromFirebase?.fatherName);
  parentElement.appendChild(makeImageElementForEdit);
  parentElement.appendChild(makeImageElementForDelete);
  parentElement.appendChild(childElement);
  parentElement.appendChild(secondChildElement);
  getParentElementToPrintItChildUsers.appendChild(parentElement);
};
const pressDeleteUser = (dataForUser) => {
  console.log("dataForUser", dataForUser.parentElement);
  const elementToGetId = dataForUser.id;
  const elementParent = dataForUser.parentElement;
  database
    .collection("todos")
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
const pressEditUser = (user) => {
  console.log("user is", user);
  const user_id = user?.id;
  const elementParent = user.parentElement;
  const elementFirstName = elementParent.childNodes[2].innerHTML;
  const elementLastName = elementParent.childNodes[3].innerHTML;
  myName.value = elementFirstName;
  fatherName.value = elementLastName;
  getSubmitButton.innerHTML = "Edit User";
  getSubmitButton.setAttribute("onclick", "editUser()");
  editElementId = user_id;
  getParentElementToPrintItChildUsers.removeChild(elementParent);
};
const editUser = () => {
  database
    .collection("todos")
    .doc(editElementId)
    .set({
      name: myName.value,
      fatherName: fatherName.value,
      id: editElementId,
    })
    .then((doc) => {
      myName.value = "";
      fatherName.value = "";
      console.log("error is", doc);
      getSubmitButton.innerHTML = "Send User";
      getSubmitButton.setAttribute("onclick", "sendData()");
    })
    .catch((error) => {
      console.log("error is", error);
    });
};
const sendData = () => {
  database
    .collection("todos")
    .add({
      name: myName.value,
      fatherName: fatherName.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      database
        .collection("todos")
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
