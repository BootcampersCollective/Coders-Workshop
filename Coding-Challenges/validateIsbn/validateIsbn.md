# Validate ISBN-10 Number

Write a function that takes a number and returns whether it is a valid ISBN-10 number. The following rules define valid ISBN-10 numbers:

* They are ten digits long
* The digits can be 0-9
* The last digit can be `X`, indicating 10
* The sum of the digits multiplied by their position modulo 11 equals 0

For example, `1112223339` is a valid ISBN-10 number. The first three conditions are satisfied, and

```js
(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10 ) % 11 = 0
```
