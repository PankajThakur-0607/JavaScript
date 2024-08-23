
let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const button = document.createElement('button');
let numGuess = 1;
let playGame = true;
let prevGuess = [];



if(playGame){
  submit.addEventListener('click' , function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    ValidateGuess(guess);
  }
)}


function ValidateGuess(guess){
  if(isNaN(guess)){
    alert('Enter the Valid Number')
  }else if(guess < 1){
    alert('Enter the Number Greater than 1');
  }else if(guess > 100){
    alert('Enter the number Less than 100');
  }else{
    prevGuess.push(guess);
    console.log(prevGuess);
    if(numGuess === 11){
      displayMessage(`Game Over Bro Better Luck next Time! Random Number was ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


function checkGuess(guess){
    if(guess == randomNumber){
      displayMessage(`Horraaay You Guesses it right`)
      endGame();
    }else if(guess < randomNumber){
      displayMessage(`oopss ... The number is tooo Low`)
    }else{
      displayMessage(`oopss the Number is too high`)
    }
}


function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `  ${guess}`;
    // console.log(guessSlot);
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;

}


function displayMessage(message){
  lowOrHi.innerHTML = ` <h2> ${message} </h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled' , '');
  button.classList.add('button');
  button.id = 'newGame'
  button.innerHTML = 'Start new Game'
  startOver.appendChild(button);
  playGame = false;

  newGame();
}

function newGame(){
  const  newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , function(){

    playGame = true;
    userInput.removeAttribute('disabled')
    guessSlot.innerHTML = '';
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${10 - numGuess}`;
    randomNumber = parseInt(Math.random() * 100 + 1);
    startOver.removeChild(newGameButton);
  })
}






































































// if(playGame){
//   submit.addEventListener('click' , function(e){
//     e.preventDefault();
//     const guess = parseInt(userInput.value)
//     console.log(guess);
//     validateGuess(guess);

//   });
// }


// function validateGuess(guess){
//   if(isNaN(guess)){
//     alert('Please Enter a Valid Number')
//   }else if(guess < 1){
//     alert('Please Enter a Number greater than 1')
//   }else if(guess > 100){
//     alert('Please Enter a Number less than 100')
//   }else{
//     prevGuess.push(guess)
//     console.log(prevGuess)
//     if(numGuess === 11){
//       displayGuess(guess)
//       displayMessage(`Game Over Bro Better Luck next Time! Random Number was ${randomNumber}`);
//       endGame();
//     }else{
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess){
//   if(guess == randomNumber){
//     displayMessage(`Hooraaay !!! , You Guessed it right 🎉🎉🎉`);
//     endGame();
//   }else if(guess < randomNumber){
//     displayMessage(`Oops.. &#128556 The Number is toooo Low`)
//   }else if(guess > randomNumber){
//     displayMessage(`Oops.. &#128556 The Number is tooo high`)
//   }
// }

// function displayGuess(guess){
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess}  `
//     remaining.innerHTML = `${10 - numGuess}`;
//     numGuess++;
// }

// function displayMessage(message){
//       lowOrHi.innerHTML = ` <h2> ${message} </h2>`
// }

// function endGame(){
//   userInput.value = '';
//   userInput.setAttribute('disabled' , '');
//   button.classList.add('button');
//   console.log(button);
//   button.id = 'newGame';
//   button.innerHTML = 'Start New Game';
//   startOver.appendChild(button);
  
//   playGame = false;
//   newGame();
// }

// function newGame(){
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function(e){
    
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     remaining.innerHTML = `${10 - numGuess}`;
//     prevGuess = [];
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(newGameButton);
//     playGame = true;
    
    
//   })
// }


