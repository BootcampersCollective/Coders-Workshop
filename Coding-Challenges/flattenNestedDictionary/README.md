# Flatten A Nested Dictionary

Write a function to flatten a nested dictionary. Namespace the keys with a period.

For example, given the following dictionary:

```js
{
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}
```

the function should return:

```js
{
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}
```

You can assume keys do not contain dots in them, i.e. no clobbering will occur.
