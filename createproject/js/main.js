/* import { API } from "../js/api.js";
import { flipCoin } from "./coinFlip.js"; */
import { totalCash } from "./makemoney.js";

console.log("You have:", totalCash);

/* const flipButton = document.getElementById("flipcoinbtn");
flipButton.addEventListener("click", flipCoin);

function flipCoin() {
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}

function result() {
  let result = coinFlip();
  if (result === "heads") {
    totalCash *= 2;
    console.log(result);
  } else {
    totalCash == 0;
    console.log(result);
  }
}

//make money button

const makemoneybtn = document.getElementById("makemoneybtn");
const cashdisplay = document.getElementById("Totalcash");

let totalCash = 5;

makemoneybtn.addEventListener("click", () => {
  totalCash++;
  cashdisplay.textContent = totalCash;
  console.log("Total Cash:", totalCash);
});
 */
