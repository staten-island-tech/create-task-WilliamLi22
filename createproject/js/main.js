import { pokemon } from "./pokemon.js";
import { totalCash } from "./makemoney.js";

console.log("You have:", totalCash);

const apiresponse = document.querySelector(`#apiresponse`);

document.getElementById("buybtn").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  randompokemon();
});

function randompokemon() {
  const randomid = Math.floor(Math.random() * pokemon.length);
  const selectedpokemon = pokemon[randomid];
  console.log("worked");
}
