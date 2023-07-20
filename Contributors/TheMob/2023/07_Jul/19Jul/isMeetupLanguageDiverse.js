/*
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
*/

// loop though list, save amount of developers for each language
	// map/object
	// { javascript: 2, python: 1}
// does any amount double the rest?

function checkLanguageDiversity(participants){
    const count = {};

    for(let participant of participants){
		if (count[participant.language]) {
			
            count[participant.language] = count[participant.language] + 1;
		}else{
            count[participant.language] =1;
        }
    }
	const counts = Object.values(count);
	counts.sort();
	const highest = counts[counts.length - 1]

	return counts.some((item) => item < highest / 2) === false;
}
// { Python: 1, Ruby: 2, JavaScript: 3 }
// what's the max amount?
	// convert to an array - Object.values()
	// check if any is less than half of the max?

	// not diverse meetup
console.log(checkLanguageDiversity(
[
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]))

// diverse meetup
console.log(checkLanguageDiversity(
[
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'Haskell' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]))
