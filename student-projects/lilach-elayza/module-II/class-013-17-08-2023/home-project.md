## More pythagoras

1. Prompt for 3 numbers
2. Validate all the numbers (should also be positive non-zero)
3. Check if the numbers can be lengths of the sides of a right triangle (in any order)

3, 4, 5 -> true
3, 4, 6 -> false
4, 3, 5 -> true

## Guess my numbers

1. Generate a random whole number between 1 and 10. Prompt the user to guess it. Show the appropriate message if the user was able/not able to guess.
2. Validate the numbers (is a number, whole, in the secret's range)
3. If the user guessed wrong, tell him if his guess was higher or lower than the secret number.
4. Ask the user for difficulty level before starting:
   - Easy - secret number between 1 and 10
   - Hard - secret number between 1 and 100
   - Impossible - secret number between 1 and 1000
   - Don't forget to adjust the validation
5. Accept the following answers for difficulty: easy, Easy, 1, EaSy, haRd, harD, 2, 3, IMPOSSIBLE etc...
6. Trailing spaces in difficulty level should be ignored (" eASy ")
7. Give the user 3 guesses (don't use `let`/`var`)
8. If during any guess, the user hits "cancel", stop the game immediately.
