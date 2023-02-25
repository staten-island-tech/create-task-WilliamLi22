const makeMoneyBtn = document.getElementById("makemoneybtn");
const totalCashSpan = document.getElementById("Totalcash");

let totalCash = 0;

makeMoneyBtn.addEventListener("click", () => {
  totalCash++;

  totalCashSpan.textContent = totalCash;

  console.log("Total Cash:", totalCash);
});

export { totalCash };
