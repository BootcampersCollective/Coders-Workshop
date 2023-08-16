# Parse Commits for URLs

You are working on automating your project's changelog, and you are tasked with parsing commit messages into usable URLs.

You are given a list of commit messages, each of which contains a reference to an issue (ticket), and a base URL.
Write a function that parses the commit messages, extracting the issue numbers and appending them to the URL, and returns
a list of fully-hydrated URLs. Issue numbers are guaranteed to be separated by a space or punctuation, or beginning/ending a string,
and strictly follow these conventions:

* They begin with three capital letters
* They end with three numbers
* The numbers and letters are separated with dashes.

Example issue numbers are: `ABC-123`, `PGR-212`, `ADM-388`

For complete example, given

`['fix user info POR-323', 'update 222 auth token ADM-356', 'DVO-964 remove console-logs', 'finish ENG-534: update ADR']`
and base URL `https://www.issuetracker.com/issue/`

Your function should return

```
[https://www.issuetracker.com/issue/POR-323,
https://www.issuetracker.com/issue/ADM-356,
https://www.issuetracker.com/issue/DVO-964,
https://www.issuetracker.com/issue/ENG-534]
```

If an issue number cannot be found in a commit, no URL for that commit should be returned.

Follow-up:

If multiple issues are found in a message, multiple URLs should be generated from that commit.

E.g. `'many fixes PGD-835 PGD-836'`should itself return two URLs.
