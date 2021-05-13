function helloGenerator(name) {
  const greeting = 'Hello, '
  function greet() {
    return greeting + name
  }
  return greet
}

const greetBryan = helloGenerator('Bryan')
const greetSomeoneElse = helloGenerator('Someone Else')

console.log(greetBryan())
console.log(greetSomeoneElse())
