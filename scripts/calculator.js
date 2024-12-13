const buttons = document.querySelectorAll("button");
const display = document.querySelector(".calculator-display");

let buttonPressed = "";
let number1 = "";
let number2 = "";
let operator = "";
let decimal = false;

document.querySelector(".calculator-buttons").addEventListener("click", (e) => {
  buttonPressed = e.target.textContent;
  buttonPress(buttonPressed);
});

function buttonPress(button) {
  
  if (!isNaN(button)) {
    if( display.value === "0" && vbutton === "0") {
      return;
    }

    if( display.value === "0" && button !== "0") {
      display.value = button;
      return;
    }

     if (operator !== "") {
      if(display.value === operator) {
        display.value = button;

      } else {
        display.value += button;
      }
      } else {
        display.value += button;

      }     
      
  }




  if (button === "C") {
    clearAll();
  }

  if (button === ".") {
    if ( !display.value.includes(".")) {
      display.value += ".";
    }
  }

  if (button === "X" || button === "/" || button === "+" || button === "-") {
    if (display.value !== "") {
      operator = button;
      number1 = parseFloat(display.value);
      display.value = button;
    }
  }

  if (button === "=") {
    if(number1 !== "" && display.value !== "") {
      number2 = parseFloat(display.value);
      display.value = calculate();
      number1 = "";
      number2 = "";
      operator = "";
    }
  }

  if (button === "") {
    let temp = display.value;
    display.value = temp.slice(0, -1);
  }
}

function clearAll() {
  decimal = false;
  operator = "";
  display.value = "";
  number1 = "";
  number2 = "";
}

function calculate() {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "/":
      if( number2 === 0) {
        if ( number1 === 0) {
          return "Really? 0/0? 🤔";
        }
        return "Don't break me!";
      }
      return number1 / number2;
      
    case "X":
      return number1 * number2;
      default: return display.value;
  }
}

