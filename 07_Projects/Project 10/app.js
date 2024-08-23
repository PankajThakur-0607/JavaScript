
let userScore = 0;
let compScore = 0;

const  choices = document.querySelectorAll('.choice');
const  msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    const  options = ["rock" , "paper" , "scissors"];
     const randomIdx =  Math.floor(Math.random() * 3);
    //  console.log(randomIdx);
     return options[randomIdx];
     
}

const  playGame = (userChoice) => {
    console.log("user choice = " , userChoice);


    // Generate Computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = " , compChoice);
    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            // Scissor , paper
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            // rock , scissors
            userWin = compChoice === 'scissors' ? false : true;           
        }else{
            // rock , paper
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }
}

const  draw = () => {
    console.log("Game wad Draw");
    msg.innerText = "Game Was Draw . Play Again";
    msg.style.backgroundColor = '#081b31';
}


const  showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green'
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'red'
    }
} 


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener('click' , (e) => {
        e.preventDefault();
        const  userChoice = choice.getAttribute('id')
        playGame(userChoice)

       
    })
})
