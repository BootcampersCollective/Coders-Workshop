/*
* They begin with three capital letters
    * They end with at least one number
        * The numbers and letters are separated with one dash.

Example issue numbers are: `ABC-123`, `PGR-212`, `ADM-388`

For complete example, given

    `['fix user info POR-323', 'update 222 auth token ADM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']`
and base URL`https://www.issuetracker.com/issue/`

Your function should return

```
['https://www.issuetracker.com/issue/POR-323',
'https://www.issuetracker.com/issue/ADM-356',
'https://www.issuetracker.com/issue/DVO-964',
'https://www.issuetracker.com/issue/ENG-534']
```
RegEx?
* iterate through each string, iterate through the commits array
* parse issue numbers out of string (?)
* append value onto baseURL constant (baseURL + constant)
* push string to new (output) array
*/

function parseCommits(commitsArray) {
    const baseURL = 'https://www.issuetracker.com/issue/'
    const changed = commitsArray.map((commit) => {
        // update 222 auth token ADM-356
        /*
        let commitArray = commit.split(" ").filter(str => {
            if (!(/[A-Z]/).test(str[0]) || !str.includes('-') || !(/[0-9]/).test(str[str.length - 1])) {
                return false;
            }
            const splitByDash = str.split('-'); // ['ANT', '1AB1]
            const [front, back] = splitByDash;
            if (splitByDash.length !== 2 || !(/[A-Z]{3}/).test(front) || !(/^\d+$/).test(back)) {
                return false;
            }
            return true;

        })
        // [ 'ANT-1AB1', 'ANT-1234-2' ]
        console.log('commit array', commitArray)
        */
        const regex = /[A-Z]{3}-\d+(?= |$|:)/g; // ANT-1AB1 ANT-12345 ANT-12345-12 
        const issue = commit.match(regex);
        if (!issue) {
            return null;
        }
        return baseURL + issue[0];
    })
    return changed.filter(v => !!v);
}

console.log(parseCommits(['fix user info ANT-1AB1 ANT-1234', 'remove DVO-964 console-logs']))

console.log(parseCommits(['fix user info ANT-1AB ANT-1234', 'update 222 auth token ADM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']))
