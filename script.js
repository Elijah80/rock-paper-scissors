const container = document.querySelector('.container')
const gameTokens = ['Rock', 'Paper', 'Scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice(gameToken) {
	return gameToken[Math.floor(Math.random() * gameToken.length)]
}

function playRound(playerChoice, computerChoice) {
	switch (playerChoice) {
		case 'Rock':
			if (computerChoice === 'Scissors') {
				playerScore++
			} else if (computerChoice === 'Paper') {
				computerScore++
			}
			break
		case 'Paper':
			if (computerChoice === 'Rock') {
				playerScore++
			} else if (computerChoice === 'Scissors') {
				computerScore++
			}
			break
		case 'Scissors':
			if (computerChoice === 'Paper') {
				playerScore++
			} else if (computerChoice === 'Rock') {
				computerScore++
			}
			break
	}

	console.log(playerScore)
	console.log(computerScore)
}

function updateScore(playerScore) {}

function createTokenButtons(token) {
	const btnSection = document.querySelector('.btn-section');
	const btn = document.createElement('button')

	btn.classList.add('btn')
	btn.setAttribute('id', token)
	btn.setAttribute('value', token)
	btn.textContent = token
	btn.addEventListener('click', function () {
		let computerSelection = getComputerChoice(gameTokens)

		playRound(btn.value, computerSelection)
	})

	btnSection.appendChild(btn);
}

function createButtonSection() {
	const buttonSection = document.createElement('div')
	buttonSection.classList.add('btn-section')

	container.appendChild(buttonSection);

	gameTokens.forEach(token => {
		createTokenButtons(token)
	})
}

function createResultsSection() {
	const resultsSection = document.createElement('div')

	resultsSection.classList.add('results-section')

	resultsSection.appendChild(createResultsCard('Player'));
	resultsSection.appendChild(createResultsCard('CPU'));

	container.appendChild(resultsSection)
}

function createResultsCard(player) {
	const card = document.createElement('div');
	const header = document.createElement('h1');
	const score = document.createElement('p');

	card.classList.add('card');
	header.classList.add('card-header');
	score.classList.add('score');

	header.textContent = player + ' Score';
	score.textContent = 0;

	card.appendChild(header);
	card.appendChild(score);

	return card;
}

function game() {
	createButtonSection();
	createResultsSection()
}

game()
