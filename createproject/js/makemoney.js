export function setupCounter(addmoney) {
  let totalcash = 0;

  const setCounter = (count) => {
    totalcash = count;
    addmoney.innerHTML = `You have ${totalcash}`;
  };
  addmoney.addEventListener("click", () => setCounter(totalcash + 1));
  setCounter(0);
}

console.log(totalcash);
