# Cryptogram

## A Google Interview Question

Given a string `S` and a set of words `D`, find the longest word in `D` that is a subsequence of `S`.

Word `W` is a subsequence of `S` if some number of characters, possibly zero, can be deleted from S to form `W`, without reordering the remaining characters.

Note: `D` can appear in any format (list, hash table, prefix tree, etc.

For example, given the input of `S = "abppplee"` and `D = {"able", "ale", "apple", "bale", "kangaroo"}` the correct output would be `"apple"`

The words "able" and "ale" are both subsequences of `S`, but they are shorter than "apple".
The word "bale" is not a subsequence of `S` because even though `S` has all the right letters, they are not in the right order.
The word "kangaroo" is the longest word in `D`, but it isn't a subsequence of `S`.

Give a string `s`, where `s = 'abppplee'`.

---

## Making the Question Simpler

We are given two things..

  1. A string, `'abppplee'`..
  1. .. and an array of words, `['apple', 'able', 'ale', 'bale', 'kangaroo']`.

We're searching for what we'll call a _**cryptogram**_.

A cryptogram is a word hiding in a larger word.

The letters composing the hidden word may be separated by any number of _other_ characters.

For example, looking at `abpplee` we can detect the word `apple`..

> **A b P P L E e**

We **may not** rearrange letters, yet will detect the correct characters sequentially.

Note, the word **BALE** exists in our string, yet requires rearrangement, so thusly is illegal.

Our final objective is to **return the longest hidden word** from our array.