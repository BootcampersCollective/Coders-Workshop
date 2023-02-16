/*
create prefixmap sum class that implements the following methods:
- `insert(key: str, value: int)`: Set a given key's value in the map. If the key already exists, overwrite the value.
- `sum(prefix: str)`: Return the sum of all values of keys that begin with a given prefix. For example, you should be able to run the following code:

```js
mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3

mapsum.insert("column", 2)
assert mapsum.sum("col") == 5
```
class with constructor that makes an object
key value data structure, Object, Map
class prefixmapsum {
	Map of data
	function sum
	function insert
}
*/

class prefixmapsum {

    constructor() {
		this.map = new Map();
    }


    sum() {

    }
	insert(key, value){
        this.map.set(key, value)
        
    }

}

const prefixMap = new prefixmapsum();

prefixMap.insert('column', 2)
prefixMap.insert('columnar', 5)

console.log(prefixMap);
