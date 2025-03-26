console.log("Time to play some Rock Paper Scissors!");

let userNumber_ = 0;
let computerNumber_ = 0;

let userScore_ = 0;
let computerScore_ = 0;

function round(_round) {
  console.log(`Round ${_round}: `);
}

// Computer Choice
function get_computer_choice() {
  computerNumber_ = Math.floor(Math.random() * 3);

  if (computerNumber_ == 0) {
    console.log("Computer picked Rock!");
  } else if (computerNumber_ == 1) {
    console.log("Computer picked Paper!");
  } else if (computerNumber_ == 2) {
    console.log("Computer picked Scissors!");
  }

  return computerNumber_;
}
// Player Choice
function get_player_choice() {
  // User input
  let userInput_ = prompt("Pick Rock, Paper or Scissors: ");
  // User input capitalized
  let userInputCaptialized_ = userInput_.toUpperCase();

  if (userInputCaptialized_ == "ROCK") {
    userNumber_ = 0;
    console.log(`You picked: ${userInputCaptialized_}`);
  } else if (userInputCaptialized_ == "PAPER") {
    userNumber_ = 1;
    console.log(`You picked: ${userInputCaptialized_}`);
  } else if (userInputCaptialized_ == "SCISSORS") {
    userNumber_ = 2;
    console.log(`You picked: ${userInputCaptialized_}`);
  }

  return userNumber_;
}

function play_round(_playerChoice, _computerChoice) {
  switch (_playerChoice) {
    // Player chose Rock
    case 0:
      // Computer choice is Rock
      if (_computerChoice == 0) {
        console.log("It's a Tie!");
      }
      // Computer choice is Paper
      else if (_computerChoice == 1) {
        console.log("Computer Paper beats your Rock!");
        computerScore_++;
      }
      // Computer choice is Scissors
      else if (_computerChoice == 2) {
        console.log("Your Rock beats Computers' Scissors!");
        userScore_++;
      }
      break;
    case 1:
      if (_computerChoice == 0) {
        console.log("Your Paper beats Computers' Rock");
        userScore_++;
      } else if (_computerChoice == 1) {
        console.log("It's a Tie!");
      } else if (_computerChoice == 2) {
        console.log("Computer Scissors beats your Paper");
        computerScore_++;
      }
      break;
    case 2:
      if (_computerChoice == 0) {
        console.log("Computer Rock beats your Scissors!");
        computerScore_++;
      } else if (_computerChoice == 1) {
        console.log("Your Scissors beats Computers' Rock!");
        userScore_++;
      } else if (_computerChoice == 2) {
        console.log("It's a Tie!");
      }
      break;
  }
}

function check_score(_userScore, _computerScore) {
  if (_userScore > _computerScore) {
    console.log("You beat the computer!");
  } else if (_computerScore > _userScore) {
    console.log("The computer beat you!");
  } else {
    console.log("The final score is a tie!!");
  }
}

function play_game() {
  for (let i = 1; i < 6; i++) {
    round(i);
    const _playerPick = get_player_choice();
    const _computerPick = get_computer_choice();
    play_round(_playerPick, _computerPick);
  }

  console.log(
    `Your score is ${userScore_} and the computer score is ${computerScore_}`
  );
  check_score(userScore_, computerScore_);
}

play_game();
