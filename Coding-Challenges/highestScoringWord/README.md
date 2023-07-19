# Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

For example, given

`hello world` return `world`  

given `a man a plan a canal panama` return `panama`

given `aa b` return `aa` since `aa` and `b` score the same but `aa` comes earlier in the string.
