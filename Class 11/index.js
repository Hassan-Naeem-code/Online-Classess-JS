var firstNum, secondNum, output, operators;
var display = document.getElementById("calculate_value");

function input(number) {
  var getCurrentDisplayValue = display.value;
  if (operators) {
    if (secondNum) {
      secondNum = String(secondNum) + String(number);
    } else {
      secondNum = String(number);
    }
  } else {
    console.log("inside else firstNum", firstNum);
    if (firstNum) {
      firstNum = String(firstNum) + String(number);
    } else {
      firstNum = String(number);
    }
  }
  display.value = getCurrentDisplayValue + number;
}
function clearCalculator() {
  display.value = "";
  operators = "";
}
function operator(operand) {
  operators = operand;
  display.value = "";
}

function getResult() {
  switch (operators) {
    case "+":
      output = Number(firstNum) + Number(secondNum);
      display.value = output;
      break;
    case "-":
      output = Number(firstNum) - Number(secondNum);
      display.value = output;
      break;
    case "*":
      output = Number(firstNum) * Number(secondNum);
      display.value = output;
      break;
    case "/":
      output = Number(firstNum) / Number(secondNum);
      display.value = output;
      break;
    default:
      break;
  }
  firstNum = "";
  secondNum = "";
  output = "";
  operators = "";
}
