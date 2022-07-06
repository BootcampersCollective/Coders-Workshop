# Summarize Data Length

You are given an array of car data, with each car type represented by an object with the following shape:

```
{
    make: 'ford',
    model: 'mustang'
    type: 'sport',
    price: 'high',
}
```

Write a function called `summarize` that takes two arguments, a search category and a search term

The category corresponds to the key in the car object and the search term corresponds to the value.

The function returns an object summarizing the search results with the following shape:

```
{
    items: [],
    length: Number
}
```

For example, given the following data

```
[
    {
        make: 'ford',
        model: 'mustang'
        type: 'sport',
        price: 'high',
        mpg: 20
    },
    {
        make: 'ford',
        model: 'focus'
        type: 'sedan',
        price: 'low',
        mpg: 30
    },
    {
        make: 'toyota',
        model: 'camry'
        type: 'sedan',
        price: 'medium',
        mpg: 33
    },
    {
        make: 'toyota',
        model: 'highlander'
        type: 'SUV',
        price: 'high',
        mpg: 24
    },
    {
        make: 'tesla',
        model: 'model y'
        type: 'electric',
        price: 'high',
        mpg: 'n/a'
    },
    {
        make: 'honda',
        model: 'odyssey'
        type: 'minivan',
        price: 'medium',
        mpg: 28
    },
    {
        make: 'honda',
        model: 'civic'
        type: 'sedan',
        price: 'low',
        mpg: 35
    },
    {
        make: 'subaru',
        model: 'forester'
        type: 'hatchback',
        price: 'medium',
        mpg: 30
    },
    {
        make: 'chevrolet',
        model: 'volt'
        type: 'hybrid',
        price: 'medium',
        mpg: 'n/a'
    },
]
```

`summarize('make', 'toyota')` should return

```
{
    items: [
        {
            make: 'toyota',
            model: 'camry'
            type: 'sedan',
            price: 'medium',
        },
        {
            make: 'toyota',
            model: 'highlander'
            type: 'SUV',
            price: 'high',
        }
    ],
    length: 2
}

```

Bonus: make the following return all cars with greater than 28 mpg:
`summarize('mpg', 'gt28')`
