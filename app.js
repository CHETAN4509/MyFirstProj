//modular = 1 work performed by only 1 function.this makes small pieces of code which are reusable components.
//since functions are reusable.

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice ");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    console.log("Game was drawn");
    msg.innerText = "Game was drawn. Play again";
    msg.style.backgroundColor = "black";

}
 
 const showWinner = (userWin) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++
        compScorePara.innerText = compScore;
        console.log("You lose.");
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
}
const genComputerChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);                                       //generates random number.
    return options[randIdx];
}

const playGame = (userChoice) => {
  console.log("user Choice =", userChoice);
  //Generate computer choice
const compChoice = genComputerChoice();
console.log("comp Choice =", compChoice);

 if(userChoice === compChoice){
    drawGame();
    
      } else{
         let userWin = true;
         if(userChoice === "rock"){
     userWin = compChoice === "paper" ? false : true;
     }
         else if(userChoice === "paper"){
     userWin = compChoice === "scissor" ? false : true;
     }else {
        compChoice === "rock" ? false : true;
     }
     showWinner(userWin);
   }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});