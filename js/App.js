/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

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