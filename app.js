// Random Number
let randomNumber = Math.floor(Math.random() * 100);

function startGame() {
    let userNumber = parseInt(document.getElementById('userInput').value);
    let resultDisplay = document.getElementById('display');

    if (randomNumber == userNumber) {
        resultDisplay.innerHTML = `Congrats, You guessed the right number`;
        resultDisplay.style.backgroundColor = 'green';
    }

    else if (randomNumber < userNumber) {
        resultDisplay.innerHTML = `Random Number is less then ${userNumber}`;
        resultDisplay.style.backgroundColor = 'red';
    }

    else if (randomNumber > userNumber) {
        resultDisplay.innerHTML = `Random Number is greater then ${userNumber}`;
        resultDisplay.style.backgroundColor = 'red';
    }
}

function reset() {
    window.location.reload();
}