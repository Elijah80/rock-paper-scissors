let playerSelection = window.prompt('Please enter Rock, Paper, or Scissors:')

function getComputerChoice() {
	const gameToken = ['Rock', 'Paper', 'Scissors']

	return gameToken[Math.floor(Math.random() * 3)]
}

function playRound(playerChoice, computerChoice) {
	let winningMessage = 'You Win! ' + playerChoice + ' beats ' + computerChoice
	let losingMessage = 'You Lose! ' + computerChoice + ' beats ' + playerChoice

	if (playerChoice.toLowerCase() !== computerChoice.toLowerCase()) {
		switch (playerChoice.toLowerCase()) {
			case 'rock':
				if (computerChoice === 'Scissors') {
					console.log(winningMessage)
				} else if (computerChoice === 'Paper') {
					console.log(losingMessage)
				}
				break
			case 'paper':
				if (computerChoice === 'Rock') {
					console.log(winningMessage)
				} else if (computerChoice === 'Scissors') {
					console.log(losingMessage)
				}
				break
			case 'scissors':
				if (computerChoice === 'Paper') {
					console.log(winningMessage)
				} else if (computerChoice === 'Rock') {
					console.log(losingMessage)
				}
				break
			default:
				console.log('You Tied! Please play again')
		}
	} else {
    console.log('You Tied! Please play again');
  }
}

playRound(playerSelection, getComputerChoice())
