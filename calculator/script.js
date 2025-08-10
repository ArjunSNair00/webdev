const display = document.getElementById("display");

function handleClick(value) {
  if (!value) return; // prevent undefined or null

  if (value === "C") {
    display.textContent = "";
  } 
  else if (value === "=") {
    try {
      display.textContent = eval(display.textContent); // ⚠️ eval for quick demo only
    } catch {
      display.textContent = "Error";
    }
  }
  else {
    display.textContent += value; // append clicked value
  }
}