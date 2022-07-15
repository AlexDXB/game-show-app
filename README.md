# game-show-app
 
A word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.

Using Javascript, I created an array of phrases and write functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the game board.

Each time the player guesses a letter, app compare the letter the player has chosen with the random phrase. If the letter is in the phrase, the game board updated with the chosen letters.

A player can keep choosing letters until player make five incorrect guesses. If the letter player chose isn’t in the phrase, app removes one of the player’s 5 guesses.

If the player completes the phrase before they run out of guesses, a winning screen will display. If the player guesses incorrectly 5 times, a losing screen will display.
