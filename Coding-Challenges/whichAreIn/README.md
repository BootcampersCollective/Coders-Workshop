# Which Are In?

Given two arrays of strings `a1` and `a2` return a sorted array `r` in lexicographical order of the strings of `a1` which are substrings of strings of `a2`.

For example, given

```js
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
```

Your function should return

```js
["arp", "live", "strong"]
```

Given

```js
a1 = ["tarp", "mice", "bull", "arms"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
```

Your function should return `["arms"]`.
