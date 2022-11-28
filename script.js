`use strict`;


let number = Math.trunc(Math.random()*10 + 1)
let score = 5
let highscore = 0

const displayMessage = function(message){
    document.querySelector(`.message`).textContent= message
}

document.querySelector(`.check`).addEventListener
(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess)
  
  
    
    if (!guess) {
        //document.querySelector(`.message`).textContent= `🛑No Number`
        displayMessage(`🛑No Number`)
   
    } else if (guess === number) {
       // document.querySelector(`.message`).textContent = `🥳 Correct Number`
        displayMessage(`🥳 Correct Number`)
        
        document.querySelector(`body`).style.backgroundColor = `#60b347`

        document.querySelector(`.number`).style.width = `30rem`

        document.querySelector(`.number`).textContent = number

        if (score > highscore)
        highscore = score
        document.querySelector(`.highscore`).textContent = highscore
    

    } else if (guess > number) {
        if(score > 0) {// document.querySelector(`.message`).textContent = ` 👆 Too High `
            displayMessage(` 👆 Too High `)
        score --
        document.querySelector(`.score`).textContent = score
    } else {
      //  document.querySelector(`.message`).textContent = `😂You Lost`
        displayMessage(`😂You Lost`)
    }

       
    
    } else if (guess < number) {
        if (score > 0){ // document.querySelector(`.message`).textContent = ` 👇 Too Low`\
            displayMessage(` 👇 Too Low`)
    
        score = score - 1
        document.querySelector(`.score`).textContent = score
    } else {
       displayMessage(`😂You Lost`)
       // document.querySelector(`.message`).textContent = `😂You Lost`
    }
       
    }


})

document.querySelector(`.again`).addEventListener (`click`, function (){

    score = 5
     number = Math.trunc(Math.random()*10 + 1)

    document.querySelector(`body`).style.backgroundColor = `#222`

document.querySelector(`.number`).textContent = `?`

document.querySelector(`.message`).textContent= `Next Round`

document.querySelector(`.number`).style.width = `15rem`

document.querySelector(`.score`).textContent = score

document.querySelector(`.guess`).value = ``


})


/*    document.querySelector(`.message`).textContent = `Too High!`
score --;
document.querySelector(`.score`).textContent = score
}else {
    document.querySelector(`.message`).textContent = `😟You lost the game!`}
    document.querySelector(`.score`).textContent = 0
 
 document.querySelector(`.message`).textContent = `Too Low!`
} score --
document.querySelector(`.score`).textContent = score
}
*/