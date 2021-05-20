# RGB to Hex Converter

Create a function that takes three values, corresponding to each color red, green, and blue, and returns the hex string identifying those three values.

For example, given `255, 255, 255`, your function should return `'FFFFFF'`. Given `173, 255, 47`, your function should return `'ADFF2F'`.

Note that your function must return a string of length 6 with all characters uppercase. For input values less than 0, return '00'; for input values greater than 255, return 'FF'.

More examples:
`150, 5, 22` => `'960516'`
`0, 89, 192` => `'0059C0'`
`-22, 0, 312` => `'0000FF'`
