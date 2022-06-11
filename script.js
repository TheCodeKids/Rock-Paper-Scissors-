var you;
var yourScore = 0;
var opponet;
var opponetScore = 0;

var choices = ["rock", "paper", "scissors"]

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png"

    opponet = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponet-choice").src = opponet + ".png";

    if (you == opponet) {
        yourScore += 1;
        oppoetScore += 1;
    }

    else {
        if (you == "rock") {
            if (opponet == "scissors") {
               yourScore += 1;
            }
            else if (opponet == "paper") {
                opponetScore += 1;
            }
        }

        else if (you == "scissors") {
            if (opponet == "paper") {
               yourScore += 1;
            }
            else if (opponet == "rock") {
                opponetScore += 1;
            }
        }

        else if (you == "paper") {
            if (opponet == "rock") {
               yourScore += 1;
            }
            else if (opponet == "scissors") {
                opponetScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponet-score").innerText = opponetScore;
}