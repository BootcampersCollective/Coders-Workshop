// Given a function `f`, and `N` return a debounced `f` of `N` milliseconds.

// For example, given function `f` and `5000`, our function should return a new function that, as long as it continues to be invoked, `f` itself will not be called for 5000 milliseconds.



// if function has not been called at all, call function and set timeout
// if a timeout exists, set timedOut to false
// if a timeout expired, set timedOut to true

const hello = () => {
    console.log('hello')
}

const debouncer = (f, N) => {
    let timeout
    
    return () => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(f, N)
    }
}

const debouncedFunction = debouncer(hello, 500)
debouncedFunction()
setTimeout(debouncedFunction, 500)
setTimeout(debouncedFunction, 1050)
setTimeout(debouncedFunction, 1550)
setTimeout(debouncedFunction, 2050)