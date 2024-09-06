let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const updateScore = (winner) => {
  if (winner === "user") {
    userScore++;
    userScorePara.textContent = userScore;
  } else if (winner === "comp") {
    compScore++;
    compScorePara.textContent = compScore;
  }
};

const setMessage = (text, bgColor) => {
  msg.textContent = text;
  msg.style.backgroundColor = bgColor;
};

const determineWinner = (userChoice, compChoice) => {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (userChoice === compChoice) {
    setMessage("It's a draw! Play again.", "#081b31");
    return;
  }

  if (winConditions[userChoice] === compChoice) {
    updateScore("user");
    setMessage(`You win! ${userChoice} beats ${compChoice}`, "green");
  } else {
    updateScore("comp");
    setMessage(`You lost! ${compChoice} beats ${userChoice}`, "red");
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const compChoice = genCompChoice();
    determineWinner(userChoice, compChoice);
  });
});
