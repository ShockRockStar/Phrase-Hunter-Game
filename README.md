# Project-4-Phrase-Hunter
 
Phrase Hunter is a browser based word guessing game. This games uses object oriented programming and JavaScript. The idea of the game is for a user to guess a movie phrase by selecting letters. If the correct letter is in the phrase the letter will appear in the browser. If the user doesn't guess the correct phrase with 5 total letters the user "loses" the round and will have to play again. This project has three javascript files: app.js, Game.js, and phrase.js. 

App.js declates the global variable for the game "phraseGame". Then I select the 3 DOM elements, btn__reset, qwerty, and keyup. In the first DOM selection, I assign the global variable to a new instance of Game. If a user clicks a letter on the onscreen keyboard a call to the method "handleInteraction" is enacted and the program checks for a matching letter in the random phrase. 
