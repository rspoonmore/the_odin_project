const playOptions = ["Rock", "Paper", "Scissors"]
const defaultNumRounds = 4

function computerPlay() {
    const randIndex = Math.floor(Math.random() * playOptions.length)
    return playOptions[randIndex]
}

function capitalize(word) {
    if (String(word)) {
        firstLetter = String(word).slice(0,1).toUpperCase()
        return firstLetter + String(word).slice(1).toLowerCase()
    }  
}

function resetGame() {
    document.querySelector("#current-round").innerHTML = 1
    document.querySelector("#user-score").innerHTML = 0
    document.querySelector("#computer-score").innerHTML = 0
    document.querySelector("#message-text").innerHTML = "Let's Begin"
}

function playRound(userSelection, computerSelection) {
    userSelection = capitalize(userSelection)
    computerSelection = capitalize(computerSelection)
    result = "ERROR"
    if (userSelection === computerSelection) {
        result = "Draw"
    }
    else {
        switch (userSelection) {
            case "Rock":
                result = (computerSelection === "Paper" ? "Lose" : "Win")
                break
            case "Paper":
                result = (computerSelection === "Scissors" ? "Lose" : "Win")
                break
            case "Scissors":
                result = (computerSelection === "Rock" ? "Lose" : "Win")
                break
            default:
                result = "ERROR"
        }
    }
    return result
}

function squarePressed(choice, currentRound, totalRounds, user_score, computer_score, message_text) {
    if (Number(currentRound.innerHTML) <= Number(totalRounds.innerHTML)) {
        userSelection = choice
        computerSelection = computerPlay()
        result = playRound(userSelection, computerSelection)
        userScore = Number(user_score.innerHTML)
        computerScore = Number(computer_score.innerHTML)
        switch (true) {
            case result === "Win":
                userScore += 1
                message = "You win! " + userSelection + " beats " + computerSelection
                break
            case result === "Lose":
                computerScore += 1
                message = "You lose. " + userSelection + " doesn't beat " + computerSelection
                break
            case result === "Draw":
                message = "Draw! You both chose " + userSelection
                break
            default:
                message = "Sorry. We ran into an error when you played " + userSelection + " and the computer played " + computerSelection
        }
        message_text.innerHTML = message
        user_score.innerHTML = userScore
        computer_score.innerHTML = computerScore
        console.log(currentRound.innerHTML, totalRounds.innerHTML, Number(currentRound.innerHTML) === Number(totalRounds.innerHTML))
        currentRound.innerHTML = (Number(currentRound.innerHTML) + 1)
    }
}

function game(numRounds) {
    let currentRound = document.querySelector("#current-round")
    let totalRounds = document.querySelector("#total-rounds")
    let user_score = document.querySelector("#user-score")
    let computer_score = document.querySelector("#computer-score")
    let message_text = document.querySelector("#message-text")
    let rockSquare = document.querySelector("#rock")
    let paperSquare = document.querySelector("#paper")
    let scissorsSquare = document.querySelector("#scissors")
    let resetButton = document.querySelector("#reset")

    totalRounds.innerHTML = numRounds

    rockSquare.addEventListener("click", () => squarePressed("Rock", currentRound, totalRounds, user_score, computer_score, message_text))
    paperSquare.addEventListener("click", () => squarePressed("Paper", currentRound, totalRounds, user_score, computer_score, message_text))
    scissorsSquare.addEventListener("click", () => squarePressed("Scissors", currentRound, totalRounds, user_score, computer_score, message_text))
    resetButton.addEventListener("click", () => resetGame())
}

game(defaultNumRounds)