let computerGuess;
let userGuess = [];
let maxAttempt;
let k = 1;

const init = () => {
    computerGuess = Math.floor(Math.random() * 100) + 1;
    document.getElementById("game-area").style.display = "none";
}

const audio = new Audio("./sound/audio.wav");

// Defining the start Game function
const startGame = ()=>{
    // changing
    audio.play();
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("newGame").style.display = "none";
}

// Defining Game End
const GameEnd = ()=>{
    document.getElementById("newGame").style.display = "block";
    document.getElementById("inputBox").setAttribute("disabled",true);
}

const mainLogic = ()=>{
    const userInput = Number(document.getElementById("inputBox").value);
    // Spread operator (...) used to add previous data
    userGuess = [...userGuess, userInput];

    if(userInput == computerGuess){
        document.getElementById("u1").innerHTML = "<h2>You WON 🎉</h2>";
        document.getElementById("inputBox").value = "";
        GameEnd();
    }
    else if(userInput > computerGuess){
        document.getElementById("u1").innerHTML = "<h3>Number is greater 😶</h3>";
        document.getElementById("inputBox").value = "";
    }
    else{
        document.getElementById("u1").innerHTML = "<h3>Number is smaller 😿</h3>";
        document.getElementById("inputBox").value = "";
    }
   
    document.getElementById("guess").innerHTML = userGuess;
    document.getElementById("attempts").innerHTML = k;
    k++;
    maxAttempt--;

    if(maxAttempt == 0){
        document.getElementById("u1").innerHTML = `<h3>You Loose!! Correct Number was ${computerGuess}`;
        GameEnd();
    }
}

// New Game start
const newGameBegin = ()=>{
    audio.play();
    window.location.reload();
}

// We have two cases either player choose to play in easy mode or hard mode
const EasyMode = ()=>{
    maxAttempt = 10;
    startGame();
}

const HardMode = ()=>{
    maxAttempt = 5;
    startGame();
}


