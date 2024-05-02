document.getElementById("rollButton").addEventListener("click", rollDice);

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", randomImageSource2);

  var resultH1 = document.getElementById("resultH1");
  var resultDiv = document.getElementById("resultDiv");

  // If player 1 wins
  if (randomNumber1 > randomNumber2) {
    resultH1.innerHTML = "🚩 Player 1 Wins!";
    
  }
  // If player 2 wins
  else if (randomNumber2 > randomNumber1) {
    resultH1.innerHTML = "Player 2 Wins! 🚩";
    
  }
  // Draw
  else {
    resultH1.innerHTML = "Draw!";
    
  }
}
