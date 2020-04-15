# Find Nodes Away

You're given a tree.

Write a function/method that takes in a Node N and a Distance D, and returns all the Nodes in the tree that are D distance away from N.

BONUS: Write another function/method that prints out the tree.

## Example

            1
          /   \
        2       3
      /   \       \
    4       5       6
          /
        7

Given that tree:

  `myTree.findNodesAway(2, 2)` ----->  `[7, 3]`