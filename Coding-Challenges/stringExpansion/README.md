# String Expansion

Consider the following expansion:

```js
solve("3(ab)") = "ababab" // because "ab" repeats 3 times
solve("2(a3(b))" = "abbbabbb" // because "a3(b)" == "abbb", which repeats twice.
solve("3(b(2(c)))"),"bccbccbcc")
```

Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.
