
class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }
  
    createPhrases() {
      const arr = [
        new Phrase("youre gonna need a bigger boat"),
        new Phrase("wax on wax off"),
        new Phrase("elementary my dear watson"),
        new Phrase("go ahead make my day"),
        new Phrase("shaken not stirred"),
      ];
      return arr;
    }
  
    // method to generate a random phrase
    randomPhrase() {
      const randomPhrase = this.phrases[
        Math.floor(Math.random() * this.phrases.length)
      ];
      return randomPhrase;
    }
  
    startGame() {
      document.getElementById("overlay").style.display = "none";
      this.resetGameAttributes();
      this.activePhrase = this.randomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  
    checkForWin() {
      return Array.from(document.getElementsByClassName("letter")).every((li) =>
        li.classList.contains("show")
      );
    }
  
    removeLife() {
      this.missed += 1;
      const lives = document.getElementsByClassName("tries");
      this.missed <= 4
        ? (lives[this.missed - 1].firstElementChild.src = "images/lostHeart.png")
        : phraseGame.gameOver(false);
    }
  
    gameOver(flag) {
      const overlay = document.getElementById("overlay");
      overlay.style.display = "";
      if (flag) {
        overlay.className = "win";
        overlay.querySelector("h1").innerText = "You win!";
      } else {
        overlay.className = "lose";
        overlay.querySelector("h1").innerText = "You lost!";
      }
    }
  
    resetGameAttributes() {
      const existingPhraseLetterArray = document.getElementById("phrase")
        .firstElementChild.children;
      if (existingPhraseLetterArray.length > 0) {
        Array.from(existingPhraseLetterArray).forEach((letter) => {
          letter.parentNode.removeChild(letter);
        });
      }
  
      const qwerty = document.getElementsByClassName("key");
      Array.from(qwerty).forEach((key) => {
        key.className = "key";
        key.disabled = false;
      });
  
      const lives = document.getElementsByClassName("tries");
      Array.from(lives).forEach((key) => {
        key.firstElementChild.src = "images/liveHeart.png";
      });
    }
  
    handleInteraction(letter) {
      const qwertyArr = document.getElementsByClassName("key");
  
      Array.from(qwertyArr).forEach((btn) => {
        if (btn.innerText === letter && btn.disabled === false) {
          btn.disabled = true;
  
          if (this.activePhrase.checkLetter(letter)) {
            btn.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if (phraseGame.checkForWin() === true) {
              setTimeout(() => this.gameOver(true), 1000);
            }
          } else {
            btn.classList.add("wrong");
            this.removeLife();
          }
        }
      });
    }
  }