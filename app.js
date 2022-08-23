let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p ");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];

    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTo(letter) {
    if (letter === "r")
        return "Rock";

    else if (letter === "s")
        return "Scissior";

    else if (letter === "p")
        return "Paper";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="user".fontsize(4).substring();
    const smallCompWord="comp".fontsize(4).substring();

    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} beats ${convertTo(computerChoice)}${smallCompWord}. You win!`;
 document.getElementById(userChoice).classList.add('green-glow');

 setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},400);

}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord="user".fontsize(4).substring();
    const smallCompWord="comp".fontsize(4).substring();
    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} loses to ${convertTo(computerChoice)}${smallCompWord}. You lost!`;

    document.getElementById(userChoice).classList.add('red-glow');

    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},400);
   


}


function draw(userChoice, computerChoice) {
   
   
    const smallUserWord="user".fontsize(4).substring();
    const smallCompWord="comp".fontsize(4).substring();
    result_p.innerHTML = `${convertTo(userChoice)}${smallUserWord} draw ${convertTo(computerChoice)}${smallCompWord}. It's a draw!`;

    document.getElementById(userChoice).classList.add('grey-glow');

 setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},400);

}

// switch case to define win lose and draw conditions
function game(userChoice) {
    const computerChoice = getComputerChoice();


    switch (userChoice + computerChoice) {

        // when user wins
        case "rs":
        case "pr":
        case "sp":
            // console.log("User Wins");
            win(userChoice, computerChoice);
            break;
        // when computer wins
        case "rp":
        case "ps":
        case "sr":
            // console.log("User Loses");
            lose(userChoice, computerChoice);
            break;
        // when game draws

        case "rr":
        case "pp":
        case "ss":
            // console.log("Tie");
            draw(userChoice, computerChoice);
            break;
    }


}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })



    paper_div.addEventListener('click', function () {
        game("p");

    })



    scissor_div.addEventListener('click', function () {
        game("s");

    })

}


main();

