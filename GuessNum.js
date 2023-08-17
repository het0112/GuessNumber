const max = prompt("enter the max number");
console.log("Max:", max);

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Number");

while (true) {
    if (guess == "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("You are Right... Random Num:", random);
        break;
    }
    else if (guess < random) {
       guess=prompt("Hint : Your guess was too small.plz try again");
    }
    else {
        guess=prompt("Hint : Your guess was too large.plz try again");
    }
}