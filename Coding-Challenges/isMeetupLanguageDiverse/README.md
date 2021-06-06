# Is Meetup Language Diverse?

You are given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organizing. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

`true` if the number of meetup participants representing any of the three programming languages is at most 2 times higher than the number of developers representing any of the remaining programming languages or
`false` otherwise.
For example, given the following input array:

```js
[
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]
```
Your function should return `false` as there are three times the number of Javascript developers (3) as there are Python developers (1).

The input will always be formatted and have the same shape as the example above, however the languages may vary from example to example.
