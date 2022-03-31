// * They begin with three capital letters
// * They end with three numbers
// * The numbers and letters are separated with dashes.

// Example issue numbers are: `ABC-123`, `PGR-212`, `ADM-388`

// For complete example, given

// `['fix user info POR-323', 'update 222 auth token ADM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']`
// and base URL `https://www.issuetracker.com/issue/`

// Your function should return

// ```
// [https://www.issuetracker.com/issue/POR-323,
// https://www.issuetracker.com/issue/ADM-356,
// https://www.issuetracker.com/issue/DVO-964,
// https://www.issuetracker.com/issue/ENG-534]

// use RegEx to find matches for ticket numbers (we could also use javascript)
// iterate through commit list; find matches (iterate through regex matches); push the match onto results list; append onto URL; 

// RegEx
// * They begin with three capital letters
// * They end with three numbers
// * The numbers and letters are separated with dashes.

// create variable for regex expression
const parseCommits = (commitsList, baseUrl) => {
	const re = new RegExp(/[A-Z]{3}-\d{3}/, 'g');

	const results = [];
	for (let c of commitsList) {
		const matches = c.match(re);
		if (matches) {
			for (m of matches) {
				results.push(baseUrl + m);
			}
		}
	}
	return results;
}
console.log(
	parseCommits(['fix user info POR-323', 'update 222 auth token adm-356', 'DVO-964 remove console-logs ADM-356', 'finish ENG-534: update ADR'], 'https://www.issuetracker.com/issue/')
)
