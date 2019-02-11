# Cryptogram

The problem is to find the longest subsequence of a target string, given a set 
of words. We say that `w` is a subsequence of `S` if, removing zero or more
characters from `S` results in `w`.

It's stipulated that the set of words can be any collection-like data
structure, but we'll assume it's just a list or array.

## Strategy

Cryptogram is a problem that cries out for a recursive solution. That's
because the following is an easy thing to prove:
```
Let w = w1 + w2 (where '+' is concatenation), and define subseq(a, b) as:

  subseq(a, b) = true iff a is a subsequence of b

Then subseq(w, S) implies there are S1 and S2 such that S = S1 + S2 and both
subseq(w1, S1) and subseq(w2, s2).
```
So the solution is simple: 
```
subseq(w, S):
    if (empty(w)):
        return True
    if (w[0] not in S):
        return False
    else:
        return subseq(w.substring(1), S[S.indexOf(w[0]))
```
In Python, a lot of this can be simplified. Strings in Python are "truthy":
the empty string and None evaluate to False, all other strings evaluate to
True. Also, `S.index(c)1` will raise an exception if `c` is not in `S`. So
all we have to do is check if `S.index(w[0])` raises an exception, then
check if the reason is that `w` is empty: if it is, we've run out of
characters to check against `S`, so we must be done; otherwise, `w[0]` is not
in `S`, so `w` is not a subsequence of `S`.
