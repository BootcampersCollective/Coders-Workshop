# maxRotation

Take a number: `56789`. Rotate left, you get `67895`.

Keep the first digit in place and rotate left the other digits: `68957`.

Keep the first two digits in place and rotate the other ones: `68579`.

Keep the first three digits and rotate left the rest: `68597`. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

`56789 -> 67895 -> 68957 -> 68579 -> 68597`

and you must return the greatest: `68957`.

Calling this function max_rot (or maxRot or ... depending on the language)

```javascript
maxRot(56789); // 68957
maxRot(38336384); // 83638433
```

## Hint

Try breaking this algorithm into more than one function.
