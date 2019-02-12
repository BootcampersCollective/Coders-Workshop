# Cryptogram

The problem is to find the longest subsequence of a target string, given a set 
of words. We say that `w` is a subsequence of `S` if removing zero or more
characters from `S` results in `w`.

It's stipulated that the set of words can be any collection-like data
structure, but we'll assume it's just a list or array.

## Strategy

Cryptogram is a problem that cries out for a recursive solution. Let's define
`subseq(s, t)` as:
```
subseq(s, t) = true iff s is a subsequence of t
```
Then it's easy to prove that `subseq(w, S)` implies there are `w1`, `w2`, `S1`
and `S2` such that
```
w = w1 + w2
S = S1 + S2
subseq(w1, S1)
subseq(w2, s2)
```
This is because we can understand subsequences as _mappings_ of characters in
a word to the target string. To say that eliminating characters in the target
results in the word means there is a mapping of characters in word `w` to the
target word `S` such that if `w`<sub>`i`</sub> (the `i`th character in `w`) =
`S`<sub>`m`</sub> and `w`<sub>`j`</sub> = `S`<sub>`n`</sub> and `i <= j`, then
`m <= n`.

From this it follows directly that if `subseq(w, S)`, then breaking `w` into
`w1` and `w2` means there are substrings `S1` and `S2` as above. (The first
character in `w2` must map to a character in `S` that comes after the one to
which the last character in `w1` maps.)

If we also keep in mind that the empty string is a subsequence of every
string, the solution becomes easy to see (that's pseudocode below):
```
subseq(w, S):
    if (empty(w)):
        return True
    if (w[0] not in S):
        return False
    else:
        return subseq(w.substring(1), S[S.indexOf(w[0]))
```
If we write the solution in Python, a lot of this can be simplified.
`S.index(c)` will raise an exception if `c` is not in `S`. So all we have to
do is check if `S.index(w[0])` raises an exception, then check if the reason
is that `w` is empty: if it is, we've run out of characters to check against
`S`, so we must be done; otherwise, `w[0]` is not in `S`, so `w` is not a
subsequence of `S`.

By the way, this is a very Pythonic way of handling the two exceptional
conditions: the positive termination condition (we've run out of characters in
the candidate string), and the negative termination condition (we've
encountered a character in the candidate that's not in the target string).

## Testing

There is a test runner, `run_test.py', which uses a test file, `tests.data`,
consisting of newline-delimited JSON strings. To run the tests, use the
command:
```
./run_tests.py test_data/simple_tests.json
```
For verbose output, use the command:
```
./run_tests.py test_data/simple_tests.json --verbose
```
For help, use the command:
```
./run_tests.py --help
```
