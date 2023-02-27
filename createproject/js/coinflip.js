/* const flipButton = document.getElementById("flipcoinbtn");
flipButton.addEventListener("click", flipCoin);

import { totalCash, setTotalCash } from "./makemoney.js";

function flipCoin() {
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip === 0) {
    console.log("Heads");
    totalCash *= 2;
    setTotalCash(totalCash);
    document.getElementById("result").innerHTML =
      "Heads! You now have $" + totalCash;
  } else {
    console.log("Tails");
    totalCash = 0;
    setTotalCash(totalCash);
    document.getElementById("result").innerHTML =
      "Tails. Click on the Make Money button to get some back!";
  }
  document.getElementById("Totalcash").innerHTML = totalCash;
}

export { flipCoin };
 */
