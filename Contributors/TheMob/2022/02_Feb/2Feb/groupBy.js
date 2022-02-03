// For example, given the list `[{ name: 'winston', age: 12 }, { name: 'sarah', age: 25 }, { name: 'vlad', age: 9}]` and grouping function
// `(item) => item.age < 21 ? 'underage' : 'notUnderage'`, your function should return

// ```
// {
//    underage: [{ name: 'winston', age: 12 }, { name: 'vlad', age: 9}],
//    notUnderage: [{ name: 'sarah', age: 25 }],
// }
// ```

// iterate through the list, depending on what the grouping function returns, group that item in the correct property
// every time we get a result from the grouping function that isn't a key in the object, add it

function groupBy(groupingFn, list) {
	const result = {};

    list.forEach(element => {
		// element: { name: 'winston', age: 12 }
        const stringVal = groupingFn(element)
        if (stringVal in result) {
            result[stringVal].push(element)
        } else {
            result[stringVal] = [element]
        }
    })
   return result; 
}

console.log(groupBy((item) => item.age < 21 ? 'underage' : 'notUnderage', [{ name: 'winston', age: 12 }, { name: 'sarah', age: 25 }, { name: 'vlad', age: 9}]))

