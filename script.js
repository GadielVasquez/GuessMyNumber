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
        //document.querySelector(`.message`).textContent= `ðNo Number`
        displayMessage(`ðNo Number`)
   
    } else if (guess === number) {
       // document.querySelector(`.message`).textContent = `ð¥³ Correct Number`
        displayMessage(`ð¥³ Correct Number`)
        
        document.querySelector(`body`).style.backgroundColor = `#60b347`

        document.querySelector(`.number`).style.width = `30rem`

        document.querySelector(`.number`).textContent = number

        if (score > highscore)
        highscore = score
        document.querySelector(`.highscore`).textContent = highscore
    

    } else if (guess > number) {
        if(score > 0) {// document.querySelector(`.message`).textContent = ` ð Too High `
            displayMessage(` ð Too High `)
        score --
        document.querySelector(`.score`).textContent = score
    } else {
      //  document.querySelector(`.message`).textContent = `ðYou Lost`
        displayMessage(`ðYou Lost`)
    }

       
    
    } else if (guess < number) {
        if (score > 0){ // document.querySelector(`.message`).textContent = ` ð Too Low`\
            displayMessage(` ð Too Low`)
    
        score = score - 1
        document.querySelector(`.score`).textContent = score
    } else {
       displayMessage(`ðYou Lost`)
       // document.querySelector(`.message`).textContent = `ðYou Lost`
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
    document.querySelector(`.message`).textContent = `ðYou lost the game!`}
    document.querySelector(`.score`).textContent = 0
 
 document.querySelector(`.message`).textContent = `Too Low!`
} score --
document.querySelector(`.score`).textContent = score
}
*/