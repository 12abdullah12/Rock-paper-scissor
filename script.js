function playGame() {
  let userChoice = prompt(
    "Enter your choice: Rock, Paper, or Scissors"
  ).toLowerCase();

  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    return;
  }

  let computerChoices = ["rock", "paper", "scissors"];
  let computerChoice = computerChoices[Math.floor(Math.random() * 3)];

  alert("Computer chose: " + computerChoice);

  let result = determineWinner(userChoice, computerChoice);
  alert(result);
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

playGame();
