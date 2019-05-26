# Clockwise Spiral

This solution to the clockwise spiral problem illustrates the use of novel
data structures to simplify and provide shape to a problem.

The key data structures are:

- `Matrix`: a transformation of the input matrix into a markable graph.
- `Node`: the contents of values in Matrix objects.
- `Direction`: an enumeration of possible directions, along with a generator
  that rotates directions in a clockwise fashion.

Creating a matrix with a given number of rows and columns first creates a
two-dimensional array of Nodes with the appropriate values, then, critically,
tells each Node to find its neighbors in any direction. Effectively, this
creates a _graph_ of Nodes connecting them to their neighbors. Once this is
complete, traversing the graph from a given start Node and direction involves
the following steps, using an initially empty list of values:

1. Mark the Node as visited, and add the value to the list of values.
2. Find the next Node in the specified direction.
3. If there is no such Node, or the Node has been visited, change direction in a
   clockwise fashion (by calling _next_ on the generator), then get the next
   Node in that direction.
4. If there is no such Node, or the Node has been visited, stop and return the
   list of values.
5. Repeat steps 1-4 with the next Node, the current direction, and the current
   list of values.

