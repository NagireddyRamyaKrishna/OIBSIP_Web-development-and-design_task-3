function convert() {
  const degrees = parseFloat(document.getElementById("degrees").value);
  const type = document.getElementById("type").value;
  const resultField = document.getElementById("result");

  if (isNaN(degrees)) {
    resultField.value = "Please enter a valid number!";
    return;
  }

  let result;

  switch (type) {
    case "fahrenheit":
      result = ((degrees - 32) * 5 / 9).toFixed(4) + " °C";
      break;
    case "celsius":
      result = ((degrees * 9 / 5) + 32).toFixed(4) + " °F";
      break;
    case "kelvin":
      result = (degrees - 273.15).toFixed(4) + " °C";
      break;
    default:
      result = "Invalid conversion";
  }

  resultField.value = result;
}
