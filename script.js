"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

console.log((document.querySelector(".guess").value = 23));
document.querySelector(".guess").value = 23;
*/
//
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //RESET//
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
  //RESET END//

  // When there is no input//
  ///////////////////////////////////////////////////////
  if (!guess) {
    document.querySelector(".message").textContent = "😉 No Number!";
    ////////////////////////////////////
    //When player wins//
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    ////HIGH SCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    /////////////////////////////////////////
    // When guess is too high
    ////
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 😎";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER! 😒";
      document.querySelector(".score").textContent = 0;
    }
    ////////////////////////////////////
    /// When guess is too low ///
    ////
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low! 😊";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER! 😒";
      document.querySelector(".score").textContent = 0;
    }
  }
});
