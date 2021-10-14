# Array vs Object
What are some advantages of using an object (hash map, map, dict) and what are some advantages of using an array (list, vector)?

## Dictionaries (obj, hash...): 
	* Advantage: inserting something, removing something, accessing something is constant time, i.e. does not depend on the size of the dictionary
	* Disadvantage: not as easy to iterate through; not guaranteed order

## Arrays
	* Disadvantage: some languages require all items in the array to be the same type; removing (or inserting at beginning) an item is O(n)
	* Advantage: guaranteed order, can do binary search if sorted
