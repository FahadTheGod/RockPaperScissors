console.log("Time to play some Rock Paper Scissors!");

let userNumber_ = 0;
let computerNumber_ = 0;

let userScore_ = 0;
let computerScore_ = 0;

function round(_round) {
  console.log(`Round ${_round}: `);
}

const rpsButtons_ = document.querySelectorAll(".rpsBtn");

const allInputDiv_ = document.createElement("div");
allInputDiv_.classList.add("picks");

document.body.appendChild(allInputDiv_);

const userPickText_ = document.createElement("p");
userPickText_.classList.add("user-choice");
allInputDiv_.appendChild(userPickText_);
userPickText_.textContent = "You picked: ";

const computerPickText_ = document.createElement("p");
computerPickText_.classList.add("computer-choice");
allInputDiv_.appendChild(computerPickText_);
computerPickText_.textContent = "Computer picked: ";

const winnerText_ = document.createElement("h3");
winnerText_.classList.add("winner");
allInputDiv_.appendChild(winnerText_);
winnerText_.textContent = "Winner: None";

playerScoreText_ = document.createElement("p");
playerScoreText_.classList.add("score");
allInputDiv_.appendChild(playerScoreText_);
playerScoreText_.textContent = "Your Score: 0";

computerScoreText_ = document.createElement("p");
computerScoreText_.classList.add("score");
allInputDiv_.appendChild(computerScoreText_);
computerScoreText_.textContent = "Computer Score: 0";

finalWinnerText_ = document.createElement("p");
finalWinnerText_.classList.add("final-winner");
allInputDiv_.appendChild(finalWinnerText_);
finalWinnerText_.textContent = "Winner is: ";
// Or we cna add function() {} instead of () => {}
for (let i = 0; i < rpsButtons_.length; i++) {
  rpsButtons_[i].addEventListener("click", () => {
    click_button(rpsButtons_[i]);
  });
}

//rpsButtons_.forEach(button => {
//  button.addEventListener("click", () => click_button(button));
//});

function click_button(_button) {
  if (userScore_ == 5 || computerScore_ == 5) {
    userScore_ = 0;
    computerScore_ = 0;
    computerScoreText_.textContent = "Computer Score: 0";
    playerScoreText_.textContent = `Your Score: 0`;
  }
  let userChoice_ = _button.getAttribute("data-choice");
  get_computer_choice();

  if (userChoice_ == "rock") {
    userNumber_ = 0;
    userPickText_.textContent = `You picked: ${userChoice_}`;
  } else if (userChoice_ == "paper") {
    userPickText_.textContent = `You picked: ${userChoice_}`;
    userNumber_ = 1;
  } else if (userChoice_ == "scissors") {
    userNumber_ = 2;
    userPickText_.textContent = `You picked: ${userChoice_}`;
  }
  play_round(userNumber_, computerNumber_);
}

// Computer Choice
function get_computer_choice() {
  computerNumber_ = Math.floor(Math.random() * 3);

  if (computerNumber_ == 0) {
    computerPickText_.textContent = "Computer picked: Rock!";
  } else if (computerNumber_ == 1) {
    computerPickText_.textContent = "Computer picked: Paper!";
  } else if (computerNumber_ == 2) {
    computerPickText_.textContent = "Computer picked: Scissors!";
  }

  return computerNumber_;
}

function play_round(_playerChoice, _computerChoice) {
  switch (_playerChoice) {
    // Player chose Rock
    case 0:
      // Computer choice is Rock
      if (_computerChoice == 0) {
        winnerText_.textContent = "Winner: It's a tie!";
      }
      // Computer choice is Paper
      else if (_computerChoice == 1) {
        winnerText_.textContent = "Winner: Computer wins!";
        computerScore_++;
        computerScoreText_.textContent = `Computer Score: ${computerScore_}`;
      }
      // Computer choice is Scissors
      else if (_computerChoice == 2) {
        winnerText_.textContent = "Winner: You win!";
        userScore_++;
        playerScoreText_.textContent = `Your Score: ${userScore_}`;
      }
      break;
    case 1:
      if (_computerChoice == 0) {
        winnerText_.textContent = "Winner: You win!";
        userScore_++;
        playerScoreText_.textContent = `Your Score: ${userScore_}`;
      } else if (_computerChoice == 1) {
        winnerText_.textContent = "Winner: It's a tie!";
      } else if (_computerChoice == 2) {
        winnerText_.textContent = "Winner: Computer wins!";
        computerScore_++;
        computerScoreText_.textContent = `Computer Score: ${computerScore_}`;
      }
      break;
    case 2:
      if (_computerChoice == 0) {
        winnerText_.textContent = "Winner: Computer wins!";
        computerScore_++;
        computerScoreText_.textContent = `Computer Score: ${computerScore_}`;
      } else if (_computerChoice == 1) {
        winnerText_.textContent = "Winner: You win!";
        userScore_++;
        playerScoreText_.textContent = `Your Score: ${userScore_}`;
      } else if (_computerChoice == 2) {
        winnerText_.textContent = "Winner: It's a tie!";
      }
      break;
  }

  check_score(userScore_, computerScore_);
}

function check_score(_userScore, _computerScore) {
  if (userScore_ != 5 && computerScore_ != 5) return;
  if (_userScore > _computerScore) {
    finalWinnerText_.textContent = `Winner is: You beat the computer ${userScore_} to ${computerScore_}!`;
    console.log(``);
  } else if (_computerScore > _userScore) {
    finalWinnerText_.textContent = `Winner is: The computer beat you ${computerScore_} to ${userScore_}!`;
  } else {
    finalWinnerText_.textContent = `Winner is: It's a tie!`;
  }
}
