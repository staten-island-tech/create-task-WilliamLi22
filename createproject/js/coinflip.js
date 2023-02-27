const flipButton = document.getElementById("flipcoinbtn");
flipButton.addEventListener("click", flipCoin);

import { totalCash } from "./makemoney.js";

function flipCoin() {
  let coinFlip = Math.floor(Math.random() * 2);
  /* let result = coinFlip(); */
  if (coinFlip === 0) {
    console.log("Heads");
    document.getElementById("result").innerHTML =
      "Heads! You now have $" + totalCash;
  } else {
    console.log("Tails");
    document.getElementById("result").innerHTML =
      "Tails. Click on the Make Money button to get some back!";
  }
  document.getElementById("Totalcash").innerHTML = totalCash;
  /*  if (result === "heads") {
    totalCash *= 2;
  } else {
    totalCash == 0;
  } */
}

export { flipCoin };

/* const flipButton = document.getElementById("flipcoinbtn");
const coindisplay = document.getElementById("result");

flipButton.addEventListener("click", () => {
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    console.log("Heads");
    return "heads";
  } else {
    console.log("Tails");
    return "tails";
  }
});

function result() {
  let outcome = flipCoin();
  if (outcome === "heads") {
    totalCash *= 2;
  } else {
    totalCash = 0;
  }
  coindisplay.textContent = totalCash;
  console.log("Total Cash:", totalCash);
} */
