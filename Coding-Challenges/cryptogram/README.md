# Cryptogram

## A Google interview question (verbatim)

Given a string `s` and a set of words `d`, find the longest word in `d` that is a subsequence of `s`.

Word `w` is a subsequence of `s` if some number of characters, possibly zero, can be deleted from S to form `w`, without reordering the remaining characters.

Note: `d` can appear in any format (list, hash table, prefix tree, etc.

For example, given the input of `s = "abppplee"` and `d = ["able", "ale", "apple", "bale", "kangaroo"]` the correct output would be `"apple"`

The words "able" and "ale" are both subsequences of `s`, but they are shorter than "apple".
The word "bale" is not a subsequence of `s` because even though `s` has all the right letters, they are not in the right order.
The word "kangaroo" is the longest word in `d`, but it isn't a subsequence of `s`.

Give a string `s`, where `s = 'abppplee'`.

## Making the question simpler

We are given two things..

1. a string, `'abppplee'`, and
2. an array of words, `['apple', 'able', 'ale', 'bale', 'kangaroo']`.

We're searching for what we'll call a **cryptogram**.

A cryptogram is a word hiding in a larger word.

The letters composing the hidden word may be separated by any number of _other_ characters.

For example, looking at `abpplee` we can detect the word `apple`:

> **A b P P L E e**

We _may not_ rearrange letters, yet will detect the correct characters sequentially.

Note, the word `"bale"` exists in our string, yet requires rearrangement, and is thus illegal.

Our final objective is to return the longest hidden word from our array.
