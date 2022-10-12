# Point Free Filter

Implement a function that takes an array of objects, each with a `name` property, and a name, and returns all objects whose name matches the name given.

The function should implement a filter function with a [point-free](https://en.wikipedia.org/wiki/Tacit_programming) predicate.

The search should be case-insensitive.

For example, given the array

```
[
    {
        name: 'Stephanie',
        rank: 12,
        location: 4
    },
    {
        name: 'alfred',
        rank: 9,
        location: 1
    },
    {
        name: 'Kensington',
        rank: 18,
        location: 88
    },
    {
        name: 'macy',
        rank: 13,
        location: 2 
    }
]
```

and a search name `Alfred` 

should return 

```
{
    name: 'alfred',
    rank: 9,
    location: 1
},
```
