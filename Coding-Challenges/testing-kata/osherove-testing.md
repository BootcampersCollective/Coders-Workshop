# Osherove Testing Kata

1. Create a simple String calculator with a method signature:<br>
———————————————<br>
int Add(string numbers)<br>
———————————————<br>
The method can take up to two numbers, separated by commas, and will return their sum. 
for example `“”` or `“1”` or `“1,2”` as inputs.
(for an empty string it will return 0) 
Hints:<br>
——————<br>
 - Start with the simplest test case of an empty string and move to one and two numbers
 - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
 - Remember to refactor after each passing test<br>
———————————————————————————————<br>
2. Allow the Add method to handle an unknown amount of numbers<br>
————————————————————————————————<br>
3. Allow the Add method to handle new lines between numbers (instead of commas).
the following input is ok: `“1\n2,3”` (will equal 6)
the following input is NOT ok: `“1,\n”` (not need to prove it - just clarifying)
——————————————————————————————-<br>
4. Support different delimiters<br>
to change a delimiter, the beginning of the string will contain a separate line that looks like this: `“//[delimiter]\n[numbers…]”` for example `“//;\n1;2”` should return three where the default delimiter is ‘;’ .
the first line is optional. all existing scenarios should still be supported<br>
————————————————————————————————<br>
5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 
if there are multiple negatives, show all of them in the exception message.<br>
————————————————————————————————<br>
STOP HERE if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.<br>
————————————————————————————————<br>
6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2<br>
————————————————————————————————<br>
7. Delimiters can be of any length with the following format: `“//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6`<br>
————————————————————————————————<br>
8. Allow multiple delimiters like this: `“//[delim1][delim2]\n”` for example `“//[*][%]\n1*2%3”` should return `6`.<br>
————————————————————————————————<br>
9. make sure you can also handle multiple delimiters with length longer than one char<br>
———————————————————————————————— 
