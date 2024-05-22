# Poll

Implement a higher-order function `poll` that repeatedly invokes a provided function until a specified condition is met or a timeout occurs.

The function should accept four arguments:  
    1. `fn`: the function that will be invoked (assume this is an asynchronous function),  
    2. `condition`: the function that will be tested against; it receives the output of `fn` and returns a boolean indicating whether polling should continue,  
    3. `interval`: how often to call the function,  
    4. `maxAttempts`: the maximum number of poll attempts

For convenience, the two functions needed are provided:

```js

const fetchData = () => {
    return new Promise(resolve => {
        const data = Math.random() > 0.7 ? 'success' : 'pending';
        resolve(data);
    });
};

const isSuccessful = (result) => result === 'success';

```

You may construct your own functions for testing.
