const container = document.querySelector('.container')
const gameTokens = ['Rock', 'Paper', 'Scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice(gameToken) {
	return gameToken[Math.floor(Math.random() * gameToken.length)]
}

function playRound(playerChoice, computerChoice) {
	const displayWinner = document.querySelector('.winner')
	const results = document.querySelector('.results-section');

	if (playerScore < 4 && computerScore < 4) {
		switch (playerChoice) {
			case 'Rock':
				if (computerChoice === 'Scissors') {
					playerScore++
					displayWinner.textContent = 'You Win!'
				} else if (computerChoice === 'Paper') {
					computerScore++
					displayWinner.textContent = 'Computer Won!'
				}
				break
			case 'Paper':
				if (computerChoice === 'Rock') {
					playerScore++
					displayWinner.textContent = 'You Win!'
				} else if (computerChoice === 'Scissors') {
					computerScore++
					displayWinner.textContent = 'Computer Won!'
				}
				break
			case 'Scissors':
				if (computerChoice === 'Paper') {
					playerScore++
					displayWinner.textContent = 'You Win!'
				} else if (computerChoice === 'Rock') {
					computerScore++
					displayWinner.textContent = 'Computer Won!'
				}
				break
		}

		if (playerChoice === computerChoice) {
			displayWinner.textContent = 'You Tied!'
		}

		updateScores(playerScore, computerScore)
	} else if (playerScore === 4) {
		results.classList.add('final-winner');
		results.textContent = 'You are the Winner!';
	} else if (computerScore === 4) {
		results.classList.add('final-winner');
		results.textContent = 'The Computer is the Winner!';
	}
}

function updateScores(userScore, cpuScore) {
	const scores = document.querySelectorAll('#score')
	let user = document.querySelector('.player-score')
	let cpu = document.querySelector('.cpu-score')

	scores.forEach(score => {
		if (score.classList.contains('player-score')) {
			user.textContent = userScore
		} else if (score.classList.contains('cpu-score')) {
			cpu.textContent = cpuScore
		}
	})
}

function createTokenButtons(token) {
	const btnSection = document.querySelector('.btn-section')
	const btn = document.createElement('button')

	btn.classList.add('btn')
	btn.setAttribute('id', token)
	btn.setAttribute('value', token)
	btn.textContent = token
	btn.addEventListener('click', function () {
		let computerSelection = getComputerChoice(gameTokens)

		playRound(btn.value, computerSelection)
	})

	btnSection.appendChild(btn)
}

function createButtonSection() {
	const buttonSection = document.createElement('div')
	buttonSection.classList.add('btn-section')

	container.appendChild(buttonSection)

	gameTokens.forEach(token => {
		createTokenButtons(token)
	})
}

function createResultsSection() {
	const resultsSection = document.createElement('div')
	const displayWinner = document.createElement('h1')

	resultsSection.classList.add('results-section')
	displayWinner.classList.add('winner')

	resultsSection.appendChild(createResultsCard('Player'))
	resultsSection.appendChild(displayWinner)
	resultsSection.appendChild(createResultsCard('CPU'))

	container.appendChild(resultsSection)
}

function createResultsCard(player) {
	const card = document.createElement('div')
	const header = document.createElement('h1')
	const score = document.createElement('p')

	card.classList.add(`${player.toLowerCase()}-card`)
	header.classList.add('card-header')
	score.classList.add(`${player.toLowerCase()}-score`)

	score.setAttribute('id', 'score')

	header.textContent = player + ' Score'
	score.textContent = 0

	card.appendChild(header)
	card.appendChild(score)

	return card
}

function game() {
	createButtonSection()
	createResultsSection()
}

game()
