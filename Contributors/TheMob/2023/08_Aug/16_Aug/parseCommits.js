/*

issue number criteria
* They begin with three capital letters
* They end with three numbers
* The numbers and letters are separated with dashes.

`['fix user info POR-323', 'update 222 auth token ADM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']`
and base URL `https://www.issuetracker.com/issue/`

Your function should return

```
[https://www.issuetracker.com/issue/POR-323,
https://www.issuetracker.com/issue/ADM-356,
https://www.issuetracker.com/issue/DVO-964,
https://www.issuetracker.com/issue/ENG-534]
```

regex??
capital letter: [A-Z]
number: [0-9]
dash: -
/[A-Z][A-Z][A-Z]-[0-9][0-9][0-9]/

string method: test() test the string to check if it includes our regex regex.test(whatiwanttocompare): returns boolean t/f
have to get the pattern, matched result: string.prototype.match()

iterate through array

*/


function parseCommits (commitMessages, baseUrl) {

	const result = [];
	const regex = /[A-Z][A-Z][A-Z]-[0-9][0-9][0-9]/g

	commitMessages.forEach((message) => {
		if (regex.test(message)) {
			message.match(regex).forEach(match => result.push(baseUrl + match))
		}
	})

  return result;
}

let messages = ['fix user info POR-323', 'update 222 auth token ADM-356 ARM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']

console.log(parseCommits(messages, 'https://www.issuetracker.com/issue/'))
