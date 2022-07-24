var getInputValue = document.getElementById("calculate_value");
var valuesFromInput = [];
var calculationSign = "";
var printResult = "";

getInputValue.addEventListener("focusout", () => {
  valuesFromInput.push(getInputValue.value);
});

function clearCalculator() {
  getInputValue.value = "";
}
function addition() {
  getInputValue.value = "";
  calculationSign = "+";
  if (valuesFromInput.length > 1) {
    getInputValue.value =
      Number(valuesFromInput[0]) + Number(valuesFromInput[1]);
  }
}

function subtraction() {
  getInputValue.value = "";
  calculationSign = "-";
  if (valuesFromInput.length > 1) {
    if (Number(valuesFromInput[0]) > Number(valuesFromInput[1])) {
      getInputValue.value =
        Number(valuesFromInput[0]) - Number(valuesFromInput[1]);
    } else {
      getInputValue.value =
        Number(valuesFromInput[1]) - Number(valuesFromInput[0]);
    }
  }
}

function multiplication() {
  getInputValue.value = "";
  calculationSign = "*";
  if (valuesFromInput.length > 1) {
    getInputValue.value =
      Number(valuesFromInput[0]) * Number(valuesFromInput[1]);
  }
}

function division() {
  getInputValue.value = "";
  calculationSign = "/";
  if (valuesFromInput.length > 1) {
    if (Number(valuesFromInput[0]) > Number(valuesFromInput[1])) {
      getInputValue.value =
        Number(valuesFromInput[0]) / Number(valuesFromInput[1]);
    } else {
      getInputValue.value =
        Number(valuesFromInput[1]) / Number(valuesFromInput[0]);
    }
  }
}

function getResult() {
  getInputValue.value = "";
  if (calculationSign == "+") {
    addition();
  } else if (calculationSign == "-") {
    subtraction();
  } else if (calculationSign == "*") {
    multiplication();
  } else if (calculationSign == "/") {
    division();
  } else {
    console.log("no result");
  }
  valuesFromInput = [];
  calculationSign = "";
  printResult = "";
}
