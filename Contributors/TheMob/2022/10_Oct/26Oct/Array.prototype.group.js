// filter-esque?
// callback, array => {}
// whatever the callback returns is the property name
// that the item will be in an array at


// add to Array.prototype

Array.prototype.group = function(callback){
  
    const obj = {}

    this.forEach(element => {
        const callbackResult = callback(element)
        obj[callbackResult] ? obj[callbackResult].push(element) : obj[callbackResult] = [element]
        // if(obj[callbackResult]){
        //     obj[callbackResult].push(element)
        // }else{
        //     obj[callbackResult] = [element]
        // }
    })
    return obj
}

// array.forEach(el => {
//     const key = cb(el)
//     result[key] ? result[key].push(el) : result[key] = [el];
//   })

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 }
];


const result = inventory.group(({ type }) => type);
//const result2 = inventory.group((item) => item.name.length < 5 ? 'shortName' : 'longName')
// const result3 = inventory.group(); // throws


console.log(result)
// console.log(result2)
// console.log(result3)
//console.log(result4)

// result should be

// 
// {
//   vegetables: [
//     { name: 'asparagus', type: 'vegetables', quantity: 5 },
//   ],
//   fruit: [
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "cherries", type: "fruit", quantity: 5 }
//   ],
//   meat: [
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "fish", type: "meat", quantity: 22 }
//   ]
// }
// 
