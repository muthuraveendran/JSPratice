/* 
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guess
- Notify player of guess
- Notify the player of the correct answer if loose 
- Let Player choose to play again
*/

/* Game value */
let min = 1, max = 10, winningNumber = getRandomNumber(), guessLeft = 3;

/* UI element */
const game = document.querySelector('.container-title'),
minNumber = document.querySelector('.min-num'),
maxNumber = document.querySelector('.max-num'),
guessBtn = document.querySelector('.guesser-submit'),
form = document.querySelector('.number-gusser'),
guessInput = document.querySelector('.gusser-input'),
message = document.querySelector('.message');

/* Assign UI min and max */
minNumber.innerHTML = min;
maxNumber.textContent = max;

/* Play Again Event Listener */
 game.addEventListener('mouseup', function(e) {
     if(e.target.classList.contains('play-again'))
    window.location.reload();
 })

/* Listen for Guess */
/* inhere if we use form  means it wiil give allthe state throw error message while clicking inputbox*/
guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(guessInput.value)
    /* Validate */
    if( isNaN(guess) || guess < min || guess > max) {
        message.style.display = 'block'
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    /* Check if won */
    if(guess === winningNumber) {
        /* Game over - won */

/* we have minimize this code by passing it into an function as gameOver() */
        /* Disabled input */
        // guessInput.disabled = true;
        // /* Change background color */
        // guessInput.style.borderColor = 'green'
        // /* Disaply Style */
        // message.style.display = 'block'
        /* Set Message */
        /* setMessage(`${guess}is correct. YOU WIN!`, 'green'); */

        /* Minimized Code */
            gameOver(true,`${guess}is correct. YOU WIN!`);





    } else {
        /* Wrong number */
        guessLeft -=1;
         if(guessLeft === 0) {
        
            /* COde Optimization */
        /* Disabled input */
        // guessInput.disabled = true;
        /* Change background color */
        // guessInput.style.borderColor = 'red'
        /* Disaply Style */
        // message.style.display = 'block' 
        /* Set Message */
        // setMessage(`Game Over , you lost. The correct number was ${guessLeft}`, 'red');

       /* Optimized Coe */ 
    //    guessInput.disabled = true;
        gameOver(false,`Game Over , you lost. The correct number was ${guessLeft}`);

         } else {

             /* COde Optimization */
             /* Game continues - answer wrong */
        /* Change background color */
        guessInput.style.borderColor = 'red'
        /* Clear Input */
        guessInput.value ="";
        /* Tell us its wrong Number */
        setMessage(`${guess} is not correct , ${guessLeft} guess left`, 'red');


        // /* Optimized Coe */ 
        // guessInput.disabled = true;
        // gameOver(false,`${guess} is not correct , ${guessLeft} guess left`)    

         }
    }
    e.preventDefault();
});


/* Game Over */
function gameOver(won , msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
     /* Disabled input */
        guessInput.disabled = true;
     /* Change background color */
        guessInput.style.borderColor = color;
        /* Set Message Color*/
        // message.style.color = color;
     /* Set Message */
     setMessage(msg,color);

     /* Play Again */
     guessBtn.value ="Play Again";
     guessBtn.className += ' play-again'
}

/* getRandomNunber */

function getRandomNumber() {
    /* Will genearate a number between a given number */
    return Math.floor(Math.random()*(max-min+1)+min); 
}

/* SetMessage */
function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg;
}