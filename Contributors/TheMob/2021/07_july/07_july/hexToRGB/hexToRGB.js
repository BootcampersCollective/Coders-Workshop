// Create a function that takes a string representing a hex color value and convert it to its corresponding RGB value, returned in an object.

// For example, given "#FF9933" your function should return `{ r: 255, g: 153, b: 51 }`.

// You can expect the input will always be a string, and will always be comprised of valid hex digits.

// base 16 -> base 10
// FF -> 255
const hexToBase10 = (hex) => parseInt(hex, 16)
const hec = (hex) => 'hi there'

const hexToRGB = (hex) => {
  const red = hexToBase10(hex[1] + hex[2])
  const green = hexToBase10(hex[3] + hex[4])
  const blue = hexToBase10(hex[5] + hex[6])

  return `{ r: ${red}, g: ${green}, b: ${blue} }`
}

console.log(hexToRGB("#FF9933"))
