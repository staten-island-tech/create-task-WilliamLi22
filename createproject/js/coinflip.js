import { totalCash } from "./makemoney.js";

const flipButton = document.getElementById("flipcoinbtn");
flipButton.addEventListener("click", flipCoin);

value = totalCash;

function flipCoin() {
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    console.log("Heads");
    value *= 2;
  } else {
    console.log("Tails");
    value = 0;
  }
}

export { value };
export { flipCoin };
