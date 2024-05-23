/*
The function should accept four arguments:  
    1. `fn`: the function that will be invoked (assume this is an asynchronous function),  
    2. `condition`: the function that will be tested against; it receives the output of `fn` and returns a boolean indicating whether polling should continue,  
    3. `interval`: how often to call the function (milliseconds),  
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
*/

//await fn, the return of fn tested as arg of condition
//no matter the condition response, no more calls

// TODO: Complete next time :)
async function doPoll(conditionFn, fn){
    let asyncReturn = await fn();
    if(conditionFn(asyncReturn)){
        return asyncReturn
    }
}

async function poll(fn, conditionFn, interval, maxAttempts){
    while(maxAttempts > 0){
        setTimeout(() => doPoll(conditionFn, fn), interval);
        
        maxAttempts -= 1
    }
}
