const compChoiceDisplay = document.getElementById("computer")
const userChoiceDisplay = document.getElementById("user")
const matchResult = document.getElementById("result")
const score = document.getElementById("score")

const choices = document.querySelectorAll('button')
let userChoice
let compChoice
let result
let userWins = 0
let userLosses = 0
let userDraws = 0

choices.forEach(choice => choice.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateCompChoice()
	getResult()
}))

function generateCompChoice() {
	const randomNum = Math.floor(Math.random() * choices.length) + 1
	if ( randomNum === 1) {
		compChoice = "rock"
	}
	else if (randomNum === 2) {
		compChoice = "paper"
	}
	else if (randomNum === 3) {
		compChoice = "scissors"
	}
	compChoiceDisplay.innerHTML = compChoice
}

function getResult() {
	if (compChoice === userChoice) {
		result = "Draw!"
		userDraws += 1
	}
	else {
		if (compChoice === "rock") {
			if (userChoice === "paper") {
				result = "Congraduations, You Win!"
				userWins += 1
			}
			else {
				result = "You lose!"
				userLosses += 1
			}
		}
		else if (compChoice === "paper") {
			if (userChoice === "scissors") {
				result = "Congradulations, You Win!"
				userWins += 1
			}
			else {
				result = "You lose!"
				userLosses += 1
			}
		}
		else {
			if (userChoice === "rock") {
				result = "Congradulations, You Win!"
				userWins += 1
			}
			else {
				result = "You lose!"
				userLosses += 1
			}
		}
	}
	matchResult.innerHTML = result
	score.innerHTML = userWins + "-" + userLosses + "-" + userDraws
}
