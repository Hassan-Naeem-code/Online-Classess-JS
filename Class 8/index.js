console.log("Class 8");

// 2. What will be the output in variables a, b & result after
// execution of the following script:

// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;

// console.log("result", result);

// console.log('--a - --b;',--a - --b);

// console.log("--a - --b + ++b;", --a - --b + ++b);

// console.log("--a - --b + ++b + b--", --a - --b + ++b + b--);

// Explain the output at each stage:

// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// PostFix 2ab++
// Prefix  --2ab

// + - * /  Common Multiplications Tools

// ** % ! ++ -- Advance Multiplication Tools

// StopWatch

// For showing stop watch variables on DOM
var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");
var milliSeconds = document.getElementById("milliSecond");

// Buttons to control the stopwatch
var btnStart = document.getElementById("btnStart");

var interval,
  currentHours = 1,
  currentMilliSecond = 0,
  currentSecond = 1,
  currentMinute = 1;

function stopWatch() {
  if (currentMilliSecond == 59) {
    seconds.innerHTML = currentSecond;
    currentSecond++;
    currentMilliSecond = 0;
  } else if (currentSecond == 59) {
    minutes.innerHTML = currentMinute;
    currentMinute++;
    currentSecond = 0;
    currentMilliSecond = 0;
  } else if (currentMinute == 59) {
    hours.innerHTML = currentHours;
    currentHours++;
    currentMinute = 0;
    currentSecond = 0;
    currentMilliSecond = 0;
  } else {
    milliSeconds.innerHTML = currentMilliSecond;
    currentMilliSecond++;
  }
}

function start() {
  console.log("start");
  interval = setInterval(stopWatch, 20);
  btnStart.disabled = true;
}

function stop() {
  console.log("stop");
  clearInterval(interval);
  btnStart.disabled = false;
}

function reset() {
  console.log("reset");
  milliSeconds.innerHTML = 0;
  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
  currentHours = 1;
  currentMilliSecond = 0;
  currentSecond = 1;
  currentMinute = 1;
  btnStart.disabled = false;
  clearInterval(interval);
}
