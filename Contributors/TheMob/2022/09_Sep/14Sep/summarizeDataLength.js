// summarize('make', 'toyota', list) => { items: [], length: 0 }

// forEach, grab items when appropriate, count as we add.

// will be O(n)

// common lookup patterns
// what if we knew that this would only ever be search with `make`


function summarize(category, catVal, list) {
	let items = []
    let length = 0

	items.length = 0;
    list.forEach(obj => {
        if(obj[category] === catVal){
            items.push(obj)
            length++
        } 
    });
    return {items,length}
}

const test = 
[
    {
        make: 'ford',
        model: 'mustang',
        type: 'sport',
        price: 'high',
        mpg: 20
    },
    {
        make: 'ford',
        model: 'focus',
        type: 'sedan',
        price: 'low',
        mpg: 30
    },
    {
        make: 'toyota',
        model: 'camry',
        type: 'sedan',
        price: 'medium',
        mpg: 33
    },
    {
        make: 'toyota',
        model: 'highlander',
        type: 'SUV',
        price: 'high',
        mpg: 24
    },
    {
        make: 'tesla',
        model: 'model y',
        type: 'electric',
        price: 'high',
        mpg: 'n/a'
    },
    {
        make: 'honda',
        model: 'odyssey',
        type: 'minivan',
        price: 'medium',
        mpg: 28
    },
    {
        make: 'honda',
        model: 'civic',
        type: 'sedan',
        price: 'low',
        mpg: 35
    },
    {
        make: 'subaru',
        model: 'forester',
        type: 'hatchback',
        price: 'medium',
        mpg: 30
    },
    {
        make: 'chevrolet',
        model: 'volt',
        type: 'hybrid',
        price: 'medium',
        mpg: 'n/a'
    },
]

console.log(summarize('make', 'toyota', test))
