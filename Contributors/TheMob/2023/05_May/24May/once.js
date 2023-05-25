

// create a closure?
// main (wrapping) function sets a boolean
// return a function that requires that boolean to be set

function once(func) {
  let killSwitch = true

  return (...args) => {
    if (killSwitch == true) {
      killSwitch = false
      return func(...args)
    }
  }


}
const myFunc = () => {
  console.log('hi');
}

const onced = once(myFunc);

onced()
onced()
onced()
onced()
onced()
onced()
onced()
onced()
