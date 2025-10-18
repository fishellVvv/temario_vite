import "./style.css";

const COLOR_PALETTE = {
  "#7C0902": "Barn red",
  "#6F4E37": "Coffe",
  "#004225": "British racing green",
  "#4B0082": "Indigo",
  "#14248A": "Resolution Blue",
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;

    document.body.style.backgroundColor = newColor;

    const colorName = document.querySelector("#color-name");
    colorName.textContent = `${newColor}`;
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
addColorName();
