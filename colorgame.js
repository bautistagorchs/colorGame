let colors = [
  "rgb(240, 5, 5)",
  "rgb(0, 255, 242)",
  "rgb(0, 14, 128)",
  "rgb(200, 14, 128)",
  "rgb(255, 255, 0)",
  "rgb(121, 235, 117)",
];

// save squares in a const
const frames = document.querySelectorAll(".square");

// asign color to squares
for (let i = 0; i < frames.length; i++) {
  frames[i].style.backgroundColor = colors[i];
}

// show color on webpage
let pickedColor = colors[1];
let span = (document.querySelector("#colorDisplay").textContent = pickedColor);
