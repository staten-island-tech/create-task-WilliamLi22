import { API } from "../js/api.js";
import { totalCash } from "./makemoney.js";

console.log("You have:", totalCash);

const apiresponse = document.querySelector(`#apiresponse`);

document.getElementById("buybtn").addEventListener("click", function () {
  apiresponse.innerHTML = ``;
  randompokemon();
});

async function randompokemon() {
  const response = await fetch(URL);
  const Info = await response.json();
  console.log(Info);
  Info.data.forEach((data) =>
    document.getElementById("apiresponse").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h2 class="apiresponse">Name: ${data.first_name} ${data.last_name}</h2>
        <h2 class="apiresponse">Height: ${data.height_feet} Feet ${data.height_inches} Inches</h2>
        <h2 class="apiresponse">Weight: ${data.weight} Pounds</h2>
 
  </div>
  `
    )
  );
}
