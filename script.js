const gameToken = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);

  console.log(gameToken[computerChoice]);
}

getComputerChoice();