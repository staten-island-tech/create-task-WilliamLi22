const makemoneybtn = document.getElementById("makemoneybtn");
const cashdisplay = document.getElementById("Totalcash");

let totalCash = 5;

function setTotalCash(amount) {
  totalCash = amount;
}

makemoneybtn.addEventListener("click", () => {
  totalCash++;
  cashdisplay.textContent = totalCash;
  console.log("Total Cash:", totalCash);
});

export { totalCash, setTotalCash };

const flipButton = document.getElementById("flipcoinbtn");
flipButton.addEventListener("click", flipCoin);

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
