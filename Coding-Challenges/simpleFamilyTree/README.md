# Simple Family Tree

Create a tree representing the example family given. Beyond creating the tree, it must have a method for retrieving the children of a particular person. Any other methods are optional. Your methods can assume family members' names are unique.

## Family

Parents: Emir, Aleah
Children: Zachary, Kim, Penelope, Alesandro
Grandchildren: Zachary has two children: Kate, Robin; Penelope has one child: Mary


```js
getChildren('Emir')

```

should return

```js
['Zachary', 'Kim', 'Penelope', 'Alesandro']

```

Bonus: write a function `getSiblings()` that returns a given input's siblings
