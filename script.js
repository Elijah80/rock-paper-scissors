const container = document.querySelector('.container')
const gameTokens = ['Rock', 'Paper', 'Scissors']

gameTokens.forEach(token => {
	createTokenButtons(token)
})

function getComputerChoice(gameToken) {
	return gameToken[Math.floor(Math.random() * gameToken.length)]
}

function playRound(playerChoice, computerChoice) {
	const winningMessage = 'You Win! ' + playerChoice + ' beats ' + computerChoice
	const losingMessage = 'The Computer Wins! ' + computerChoice + ' beats ' + playerChoice
	const tyingMessage = "It's a Tie! The computer chose " + computerChoice + ' and you chose ' + playerChoice

	switch (playerChoice) {
		case 'Rock':
			if (computerChoice === 'Scissors') {
				return winningMessage
			} else if (computerChoice === 'Paper') {
				return losingMessage
			} else {
				return tyingMessage
			}
			break
		case 'Paper':
			if (computerChoice === 'Rock') {
				return winningMessage
			} else if (computerChoice === 'Scissors') {
				return losingMessage
			} else {
				return tyingMessage
			}
			break
		case 'Scissors':
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

function createTokenButtons(token) {
	const btn = document.createElement('button')

	btn.classList.add('btn')
	btn.setAttribute('id', token)
	btn.setAttribute('value', token)
	btn.textContent = token
	btn.addEventListener('click', function () {
		game(btn.value)
	})

	container.appendChild(btn)
}

function game(playerSelection) {
	let computerSelection = getComputerChoice(gameTokens)

	console.log(playRound(playerSelection, computerSelection))
}
