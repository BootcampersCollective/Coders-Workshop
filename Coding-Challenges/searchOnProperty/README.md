# Search On Property

Write a function that will filter a list of objects by a search term. The objects should be filtered on a specified property. All objects that satisfy the search property/term should be returned in their entirety in an array. The search should be entirely case-insensitive.

For example, given a search term `doo`, a property `title`, and an input array `[{ title: 'Scooby Doo' }, { title: 'Dr. Doolittle' }, { title: 'Aladdin' }]`, the function should return the array `[{ title: 'Scooby Doo' }, { title: 'Dr. Doolittle' }]`

Given a search term `dog`, a property `title`, and an input array `[{ title: 'Scooby Doo', about: 'A Dog' }, { title: 'Doogie Howser, M.D.', about: 'A doctor' }, { title: 'Aladdin', about: 'A genie' }]`, the function should return `[]` since `dog` does not appear in any `title` property in the input array.

Given an empty search string, the entire input array should be returned.

Given a search term not appearing on any of the specified properties, or a property that doesn't exist, an empty array should be returned. In the above example's array, a property `year` should always return an empty array regardless of the search term. With the same input array, a property `title` and a search term `Star Wars` should also return an empty array.
