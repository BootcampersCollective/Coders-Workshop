Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.


Want to return number of rolls once a condition is met


Increment counter for every roll
roll: Random number generator between 1-6
Keep track of number rolled if it is 5, check next roll, if next number is not six or 5, set tracking number back to 0
