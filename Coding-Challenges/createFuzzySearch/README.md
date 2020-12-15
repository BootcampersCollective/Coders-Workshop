# Fuzzy Search

Create a fuzzy search function. This function should take a dictionary of words, along with a search term, and should return the definition of the closest word, if such a close word could be found. The function should return only one value. If a close word cannot be found or determined, the function should return `null`. The function will need to pass the below tests.

The following dict will be used for all tests

```js
{
    "Juneau": "Alaska",
    "Little Rock": "Arkansas",
    "Denver": "Colorado",
    "Atlanta": "Georgia",
    "Boise": "Idaho",
    "Annapolis": "Maryland",
    "Boston": "Massachusetts",
    "Jefferson City": "Missouri",
    "Lincoln": "Nebraska",
    "Trenton": "New Jersey",
    "Raleigh": "North Carolina",
    "Bismarck": "North Dakota",
    "Austin": "Texas",
    "Richmond": "Virginia",
    "Olympia": "Washington",
    "Madison": "Wisconsin",
    "Cheyenne": "Wyoming",
}
```

`fuzzySearch('Boston')` should return `Massachusetts`
`fuzzySearch('Bstn')` should return `Massachusetts`
`fuzzySearch('Tranten')` should return `New Jersey`
`fuzzySearch('Rally')` should return `Raleigh`
`fuzzySearch('tan')` should return `null`
`fuzzySearch('Auston')` should return `Texas`
`fuzzySearch('Olimpeak')` should return `Washington`
`fuzzySearch('mad8son')` should return `Wisconsin`
`fuzzySearch('gheliar')` should return `North Carolina`
`fuzzySearch('City')` should return `null`
`fuzzySearch('Little')` should return `null`
`fuzzySearch('boy')` should return `null`
