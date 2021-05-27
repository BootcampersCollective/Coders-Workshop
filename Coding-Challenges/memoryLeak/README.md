
# Memory Leak

Data is not garbage collected while it's still being referenced from the 'roots' of a program, which includes global object (`window`)


## Let/Const vs Var
```js
bar = 'this is a global variable'
var baz = 'this is a global variable'

window.bar = 'this is a global variable'
window.baz = 'this is a global variable'


```


```js
const a = '123'

setInterval(() => {
    console.log(a)
}, 50000)
```



```js
for (let i = 0; i < 5; i += 1) {
    console.log('Hi')
}
console.log(i)

for (i = 0; i < 5; i += 1) {
    console.log('Hi')
}
console.log(i)
```







```js
function greet(name) {
    const textToPrint = 'Hello ' + name + '!'
    console.log(textToPrint)
}

greet('Alex')

console.log('Bye')
```

