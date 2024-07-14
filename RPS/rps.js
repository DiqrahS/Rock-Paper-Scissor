let userScore = 0;
let compScore = 0;

const userc= document.querySelector("#userc");
const compc= document.querySelector("#compc");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock","Paper","Scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () => {
  msg.innerText = "** DRAW ** , PLAY AGAIN";
  msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `** YOU WIN ** ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `** YOU LOST ** ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}


const playGame = (userChoice) => {
  userc.innerText = userChoice;
  userc.style.color ="darkcyan";

  //Generate Computers choice
  const compChoice = genCompChoice();
  compc.innerText = compChoice;
  compc.style.color = "crimson";


  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  }
  else{
    let userWin = true;
    if (userChoice === "Rock") {
      //then comp choice is scissor or paper
      userWin = compChoice === "Paper" ? false : true;
    }
    else if (userChoice === "Paper"){
      //rock, scissor
      userWin = compChoice ==="Scissor" ? false : true;
    }
    else{
      //Rock, Paper
      userWin = compChoice === "Rock" ? false : true ;
    }

    showWinner(userWin,userChoice,compChoice);
  }
};

//Users chhoice will be selected
choices.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});