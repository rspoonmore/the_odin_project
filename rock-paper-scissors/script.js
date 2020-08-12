let playOptions = ["Rock", "Paper", "Scissors"]

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
    console.log(result)
    return result
}

function game(numRounds) {
    let round = 1
    userScore = 0
    computerScore = 0
    while (round <= numRounds) {
        userSelection = capitalize(String(prompt("Would you like to choose Rock, Paper, or Scissors?")))
        computerSelection = computerPlay()
        result = String(playRound(userSelection, computerSelection))
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
        alert(message)
        round += 1
    }
}

game(1)