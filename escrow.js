console.log(ethers);

const betFormElement = document.getElementById("bet-form");

betFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(betFormElement);
  const bet = {};
  for (const [name, value] of data) {
    bet[name] = value;
  }
  console.log(bet);
  // bet is an object containing all the information about the bet
  // START CODING HERE
  /////////////////////////////////////////////////////
});
