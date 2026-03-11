const display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    if (display.value.trim() === "") return;
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
