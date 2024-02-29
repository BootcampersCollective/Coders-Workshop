
//For example, given function `f` and `5000`,
//our function should return a new function that, as long as it continues to be invoked,
//`f` itself will not be called for N milliseconds.

// get cb function and time as a parameter

const debounce = (cb, timeMs) => {
    let timerId;

    return function(...args) {
        if(timerId) {
            clearTimeout(timerId)
        }
     	 timerId = setTimeout(()=> {
            cb(...args);
        }, timeMs)
	};   
}

const pong = (firstname, lastname) => console.log(firstname + ' ' + lastname)

const debouncePong5s = debounce(pong,5000);

debouncePong5s()
debouncePong5s('pang')
debouncePong5s('peng')
debouncePong5s('Taylor', 'Swift')
