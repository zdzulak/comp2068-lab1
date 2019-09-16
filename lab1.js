var userChoice = prompt("Choose rock, paper, or scissors");

var randNum = Math.random();


// determine the computerChoice from the randNum
if (randNum <= 0.34) {
  var computerChoice = "rock"
}

else if (randNum >= 0.35 && randNum <= 0.67) {
  var computerChoice = "scissors"
}

else {
  var computerChoice = "paper"
}


console.log(userChoice);
console.log(computerChoice);
console.log(randNum);

if (userChoice === "rock" && computerChoice === "scissors") {
  console.log("User wins!");
}

else if (userChoice === "paper" && computerChoice === "rock") {
  console.log("User wins!");
}

else if (userChoice === "scissors" && computerChoice === "paper") {
  console.log("User wins!");
}

else if (userChoice == computerChoice) {
  console.log("It's a tie");
}

else {
  console.log("Computer Wins");
}