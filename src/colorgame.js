// let col = [
//   // "rgb(240, 5, 5)",
//   // "rgb(0, 255, 242)",
//   // "rgb(0, 14, 128)",
//   // "rgb(200, 14, 128)",
//   // "rgb(255, 255, 0)",
//   // "rgb(121, 235, 117)",
// ];
let squares = 6;
let colors = [];
for (let i = 0; i < squares; i++) {
  colors.push(randomRgbColor());
}

let pickedColor = colors[randomArrayNumber(squares)];

let frames = document.querySelectorAll(".square");
let showRgb = (document.querySelector("#colorDisplay").textContent =
  pickedColor);
let message = document.querySelector("#message");
let title = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

for (let i = 0; i < frames.length; i++) {
  frames[i].style.backgroundColor = colors[i];
}

frames.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.style.backgroundColor === pickedColor) {
      title.style.color = pickedColor;
      message.textContent = "You nailed it";
      message.style.transform = "rotate(720deg) scale(1.1)";
      frames.forEach((e) => {
        e.style.backgroundColor = pickedColor;
      });
      resetButton.textContent = "Play again?";
    } else {
      message.textContent = "Try again";
      e.style.backgroundColor = "#232323";
    }
  });
});

function randomArrayNumber(squares) {
  return Math.floor(Math.random() * squares);
}

function randomRgbColor() {
  let first = Math.floor(Math.random() * 256);
  let second = Math.floor(Math.random() * 256);
  let third = Math.floor(Math.random() * 256);
  return `rgb(${first}, ${second}, ${third})`;
}

resetButton.addEventListener("click", () => {
  title.style.color = "white";
  message.textContent = "";
  resetButton.textContent = "Nuevos Colores ";
  message.style.transform = "rotate(0deg) scale(1)";
  colors = [];
  for (let i = 0; i < squares; i++) {
    colors.push(randomRgbColor());
  }
  pickedColor = colors[randomArrayNumber(squares)];
  for (let i = 0; i < frames.length; i++) {
    frames[i].style.backgroundColor = colors[i];
  }
});

easy.addEventListener("click", () => {
  squares = 3;
  for (let i = squares; i < frames.length; i++) {
    frames[i].style.display = "none";
  }
  easy.classList.add("selected");
  hard.classList.remove("selected");
});

hard.addEventListener("click", () => {
  squares = 6;
  for (let i = 0; i < frames.length; i++) {
    frames[i].style.display = "block";
  }
  hard.classList.add("selected");
  easy.classList.remove("selected");
});

console.log(colors);
