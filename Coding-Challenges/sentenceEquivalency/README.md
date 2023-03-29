# Sentence Meaning Equivalence

You are given a set of synonyms, such as `[[big, large], [eat, consume]]`. Each item in the set has two synonymous values. Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:
* "He wants to eat food."
* "He wants to consume food."  

With synonyms `[['eat', 'consume'], ['big', 'large']]`

Note that the synonyms `[a, b]` and `[a, c]` do not necessarily imply `[b, c]`: consider the case of [coach, bus] and [coach, teacher].

Follow-up: what if we can assume that `[a, b]` and `[a, c]` do in fact imply `[b, c]`?
