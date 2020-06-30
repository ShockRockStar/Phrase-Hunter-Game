
//Declare a variable for the game, and add event listeners, to listen for players mouse click
let phraseGame;

document.getElementById("btn__reset").addEventListener("click", () => {
    phraseGame = new Game();
    phraseGame.startGame();
});

document.getElementById("qwerty").addEventListener("click", (e) => {
  if (e.target.className === "key") {
    phraseGame.handleInteraction(e.target.innerText);
  }
});

document.addEventListener("keyup", (e) => {
  if (document.getElementById("overlay").style.display === "none")
  phraseGame.handleInteraction(e.key);
});