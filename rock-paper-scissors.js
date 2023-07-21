let randomNumber = 0;
let computerMove = '', userMove = '', result = '';

let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function printWhoWon(result){
    document.querySelector('.js-result').innerHTML = result;
}

function printMoves(computerMove, userMove){
    document.querySelector('.js-moves').innerHTML = `Your move: <img src="images/${userMove}-emoji.png">  Computers move: <img src="images/${computerMove}-emoji.png">`;
}

function whoWins(computerMove, userMove){
    if(computerMove===userMove){
        result = "It's a tie";
        score.ties++;
        updateScore();
        printWhoWon(result);
        printMoves(computerMove, userMove);
    }

    else if((computerMove=='Rock' && userMove=='Paper') || (computerMove=='Scissors' && userMove=='Rock') || (computerMove=='Paper' && userMove=='Scissors')){
        result = "You won!";
        score.wins++;
        updateScore();
        printWhoWon(result);
        printMoves(computerMove, userMove);
    }

    else if((computerMove=='Paper' && userMove=='Rock') || (computerMove=='Rock' && userMove=='Scissors') || (computerMove=='Scissors' && userMove=='Paper')){
        result = "The computer won..."
        score.losses++;
        updateScore();
        printWhoWon(result);
        printMoves(computerMove, userMove);
    }
    localStorage.setItem('score', JSON.stringify(score));
}

function game(userMove){
    //between 0 and 1
    randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    whoWins(computerMove, userMove);
}

function reset(){
    score.losses = 0;
    score.wins = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}


