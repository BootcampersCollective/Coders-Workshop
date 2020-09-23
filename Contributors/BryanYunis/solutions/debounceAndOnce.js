const debounced = function(f, milliseconds) {
    let timeout
  
    return function() {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(f, milliseconds)
    }
}

const once = (f) => {
    let called = false
    return function () {
        if (!called) {
            called = true
            f.apply(this, arguments)
        }
    }
}

const f = (string) => {console.log(string)}
// const debouncedFunction = debounced(f, 500)
// console.log(debouncedFunction())

const fireOnce = once(f)
fireOnce('hi')
fireOnce('hi')

