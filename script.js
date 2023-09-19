function getComputerChoice() {
	const gameToken = ['Rock', 'Paper', 'Scissors']

	return gameToken[Math.floor(Math.random() * gameToken.length)]
}

function playRound(playerChoice, computerChoice) {
	const winningMessage = 'You Win! ' + playerChoice + ' beats ' + computerChoice
	const losingMessage = 'The Computer Wins! ' + computerChoice + ' beats ' + playerChoice
	const tyingMessage = "It's a Tie! The computer chose " + computerChoice + ' and you chose ' + playerChoice

	switch (playerChoice.toLowerCase()) {
		case 'rock':
			if (computerChoice === 'Scissors') {
				return winningMessage
			} else if (computerChoice === 'Paper') {
				return losingMessage
			} else {
				return tyingMessage
			}
			break
		case 'paper':
			if (computerChoice === 'Rock') {
				return winningMessage
			} else if (computerChoice === 'Scissors') {
				return losingMessage
			} else {
				return tyingMessage
			}
			break
		case 'scissors':
			if (computerChoice === 'Paper') {
				return winningMessage
			} else if (computerChoice === 'Rock') {
				return losingMessage
			} else {
				return tyingMessage
			}
			break
		default:
			return 'You and the computer tied!'
	}
}

function game() {
	for (let i = 0; i <= 4; ++i) {
		let playerSelection = window.prompt('Please enter Rock, Paper, or Scissors:')
		let computerSelection = getComputerChoice()

		console.log(playRound(playerSelection, computerSelection))
	}
}

game()
