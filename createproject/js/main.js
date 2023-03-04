import { pokemon } from "./pokemon.js";
/* import { totalCash } from "./makemoney.js"; */

//total cash
let totalCash = 5;

function setTotalCash(amount) {
  totalCash = amount;
}

console.log("You have:", totalCash);

//Buy button
const apiresponse = document.querySelector(`#apiresponse`);

document.getElementById("buybtn").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  randompokemon();
});

function randompokemon() {
  const randomid = Math.floor(Math.random() * pokemon.length);
  const selectedpokemon = pokemon[randomid];
  document.getElementById("apiresponse").insertAdjacentHTML(
    "beforeend",
    `
      <div class="card">
      <h2 class="apiresponse">Name: ${selectedpokemon.name} </h2)
      <h2 class="apiresponse">Generation: ${selectedpokemon.gen} </h2>
      <img src="${selectedpokemon.front_sprite}" alt="Front_sprite of Pokemon">
      <h2 class="apiresponse">Type(s): ${selectedpokemon.types} </h2>
</div>
`
  );
  console.log(selectedpokemon);
}

const makemoneybtn = document.getElementById("makemoneybtn");
const cashdisplay = document.getElementById("Totalcash");

//get one dollar per click
makemoneybtn.addEventListener("click", () => {
  totalCash++;
  cashdisplay.textContent = totalCash;
  console.log("Total Cash:", totalCash);
});

//double or nothing
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
