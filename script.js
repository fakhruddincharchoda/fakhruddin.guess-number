"use strict";
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highscore=0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // not guess
  if (!guess) {
    document.querySelector(".message").textContent = "⚠️ No Number";
  }
  //   if guess right
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳you Guess Correct";
    document.querySelector(".number").textContent=secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if(score > highscore){
      highscore=score
      document.querySelector(".highscore").textContent=highscore;
    }

  }
  //    if guess low
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈To High";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    }
      else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent="👾 you lose the game"
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉To Low";
     if(score>1){
        score--;
        document.querySelector(".score").textContent = score;
     }
        else{
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent="👾you lose the game"
    }
  }
  // restart the game 
  document.querySelector(".again").addEventListener(
    "click",function(){
      score=20;
      secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
      document.querySelector(".message").textContent="Start guessing...";
      document.querySelector(".guess").textContent="";
      document.querySelector(".number").textContent="?";
      document.querySelector("body").style.backgroundColor ="#222"
      document.querySelector(".number").style.width="15rem"
      
    }
  )
});
