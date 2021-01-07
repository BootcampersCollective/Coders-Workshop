// * It immediately follows `-p-`
// * It is terminated with `-`
// For example, given the following URL `example.com/product-p-8099-index-home.html`,
// your function should return `'8099'`,
// as it satisfies the above rules. Given `example.com/products/gift-p-door801933-edit.html`,
// your function should return `'door801933'`.

// split on -p- -> gives two arrays
// split second array on dash, want first item of split

'Hello-world!'.split('-') // ["Hello", "world!"]

const assert = require('assert')

const extractProductId = (url) => url.split('-p-')[1].split('-')[0]

// assert.strictEqual(1, 2) // should fail
assert.strictEqual(extractProductId('example.com/product-p-8099-index-home.html'), '8099')
assert.strictEqual(
  extractProductId('example.com/products/gift-p-door801933-edit.html'),
  'door801933'
)
console.log('All tests passed!')
