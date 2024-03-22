let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll('.choices');
const msgPrint = document.querySelector('#msg');
const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');

const genCompChoice = ()=>{
       const options =['rock','paper','scissors'];
       const randIdx = Math.floor(Math.random()*3);
       return options[randIdx];
};
const drawGame = () =>{
   msgPrint.innerText = "Game Draw.Play Again";
   msgPrint.style.backgroundColor = "yellow";
};
const showWinner=(userWin)=>{
    if(userWin){
      userScore++;
      userScorepara.innerText=userScore;
        msgPrint.innerText = "You Win";
        msgPrint.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msgPrint.innerText = "You Lose";
        msgPrint.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
   const compChoice = genCompChoice();
   if(userChoice === compChoice){
     //draw game
     drawGame();
   }
   else{
    let userWin = true;
    if(userChoice ==='rock'){
       userWin=compChoice ==="paper"?false:true;
    }
    else if(userChoice ==='paper'){
        userWin=compChoice ==="scissors"?false:true;
     }
     else{
        userWin=compChoice ==="rock"?false:true;
     }
     showWinner(userWin)
   }

};


choice.forEach((choices) => {
    choices.addEventListener("click",()=>{
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });

});