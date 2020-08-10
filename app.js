// Goal is to build a color pallette selection website via linking through the Chroma.js library.

// Global Selections & Variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHex = document.querySelectorAll(".color h2");
let initialColors;

// Functions

// Color Geneartor
function generateHex() {
  const hexColor = chroma.random();

  return hexColor;
}

let randomHex = generateHex();

console.log(randomHex);

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();
    // Add color to the background of the div column.
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();

// Event Listeners
