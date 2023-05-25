/*
For example, given the following URL `example.com/product-p-8099-index.html`, your function should return `'8099'`, as it satisfies the above rules.
Given `example.com/products/gift-p-door801933-edit.html`, your function should return `'door801933'`.
*/
// regex
// could use splits
// could brute force: traverse the url
// if: '-', check character before, if 'p', then grab everything after until the next dash

const getProductID = (url) => {
  const pattern = /-p-(.*)-/;
  const matches = url.match(pattern);

  if (matches.length > 1) return matches[1];
  return '';
}

console.log(getProductID('example.com/product-p-8099-index.html'))
console.log(getProductID('getProduexample.com/products/gift-p-door801933-edit.html'))
