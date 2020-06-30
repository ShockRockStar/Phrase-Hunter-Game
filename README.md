# Project-4-Phrase-Hunter
 
Phrase Hunter is a browser based word guessing game. This games uses object oriented programming and JavaScript. The idea of the game is for a user to guess a movie phrase by selecting letters. If the correct letter is in the phrase the letter will appear in the browser. If the user doesn't guess the correct phrase with 5 total letters the user "loses" the round and will have to play again. This project has three javascript files: app.js, Game.js, and phrase.js. 

App.js declares the global variable for the game "phraseGame". Then I select the 3 DOM elements, btn__reset, qwerty, and keyup. In the first DOM selection, I assign the global variable to a new instance of Game. If a user clicks a letter on the onscreen keyboard a call to the method "handleInteraction" is enacted and the program checks for a matching letter in the random phrase. 

The Phrase.js file contains the Phrase class which first converts all phrases to lowercase. I add a method, 'addPhraseToDisplay' which maps, the phrases as an array, checks if a character is selected and creates a list element which is appended to the unordered list element. 

The checkLetter method checks the letter class length. If there is no letter a boolean value is not returned.
