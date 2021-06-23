const assert = require("assert")

const _curry = (length, combinedArgs, fn) => (...args) => {
  return combinedArgs.length + args.length >= length
    ? fn.apply(this, combinedArgs.concat(args))
    : _curry(length, combinedArgs.concat(args), fn)
}

const curry = (fn) => (...args) => args.length === fn.length
  ? fn.apply(this, args)
  : _curry(fn.length, args, fn)

const tail = (a) => a.length ? a.slice(1) : []
const head = (a) => a.length ? a[0] : null
const last = (a) => a.length ? head(a.slice(-1)) : null
const drop = (a) => a.length ? a.slice(0, -1) : []
const dropN = (n, a) => a.length ? a.slice(-n) : []
const headN = (n, a) => a.length ? a.slice(n) : []
const split = curry((splitter, s) => s.split(splitter))
const truthy = (x) => !!x
const complement = (fn) => (...args) => !fn.apply(this, args)
const falsy = complement(truthy)
const isNil = (x) => x === undefined || x === null || x === false
const isZero = (n) => n === 0
const notNil = complement(isNil)
const sameAs = curry((a, b) => notNil(a) && notNil(b) && a === b)
const take = curry((n, a) => a.length ? a.slice(0, n) : [])
const takeOrEmpty = (n, a) => take(n,a).length === n ? take(n,a) : []
const always = (x) => () => x
const T = () => true
const F = () => false
const identity = (x) => x

const assoc = curry((prop, val, obj) => {
  obj[prop] = val
  return obj
})

const prop = curry((key, obj) => notNil(obj) ? obj[key] : {})

const propOr = curry((fallback, key, obj) => notNil(obj) && notNil(prop(key, obj)) ? prop(key, obj) : fallback)

const nestedConcat = (a1, a2) =>{
  const arr = [...a1]
  arr.push(a2)
  return arr
}

const apertureReducer = (a, c) => nestedConcat(a, c)
const _aperture = curry((n, init, a) => {
  if (a.length < n) return init
  const acc = apertureReducer(init, takeOrEmpty(n, a))
  return _aperture(n, acc, tail(a))
})

const aperture = (n, a) => _aperture(n, [], a)

const reduce = curry((reducer, init, iterator) => {
  const [curr] = iterator
  return (isNil(curr))
    ? init
    : reduce(reducer, reducer(init, curr), tail(iterator))
})

const reduceWhile = curry((pred, reducer, init, iterator) => {
  const [curr] = iterator
  if (isNil(curr)) return init
  const acc = reducer(init, curr)
  return pred(acc,curr)
    ? reduceWhile(pred, reducer, acc, tail(iterator))
    : acc
})

const reduceRight = curry((reducer, init, iterator) => {
  const curr = last(iterator)
  return (isNil(curr))
    ? init
    : reduceRight(reducer, reducer(init, curr), drop(iterator))
})

const pipeReducer = ((a, c) => c.call(this, a))
const pipe = (...fns) => (...args) => reduce(pipeReducer, head(fns).apply(this, args), tail(fns))


const reverseReducer = (a, c) => nestedConcat(a, c)
const reverse = reduceRight(reverseReducer, [])

const dropHeadAndTail = pipe(tail, drop)

const flip = (fn) => (...args) => fn.apply(this, reverse(args))

const everyReducer = (pred) => (a, c) => pred.call(this, c)
const _every = (pred, arr) => reduceWhile(truthy, everyReducer(pred), false, arr)
const every = curry(_every)

const anyReducer = (pred) => (a, c) => pred.call(this, c)
const any = curry((pred, arr) => reduceWhile(falsy, anyReducer(pred), false, arr))

const _contains = (item, arr) => any(sameAs(item), arr || [])
const contains = curry(_contains)
const _containsItemLast = flip(_contains)
const containsItemLast = curry(_containsItemLast)

const mapReducer = (mapper) => (a, c) => a.concat(mapper(c))
const map = curry((mapper, arr) => reduce(mapReducer(mapper), [], arr))

const filterReducer = (pred) => (a, c) => a.concat(pred(c) ? c : [])
const filter = (pred, arr) => reduce(filterReducer(pred), [], arr)

const compose = (...fns) => (...args) => reduce(pipeReducer, head(reverse(fns)).apply(this, args), tail(reverse(fns)))

const cond = curry((arr, arg) => {
  if (isNil(arr.length)) return undefined
  return head(head(arr)).call(this, arg)
    ? last(head(arr)).call(this, arg)
    : cond(tail(arr), arg)
})

const argTransform = curry((arr, fn, arg) => {
  if (isZero(arr.length)) return undefined
  return fn.call(this, head(head(arr)).call(this, arg))
    ? last(head(arr)).call(this, arg)
    : argTransform(tail(arr), fn, arg)
})

module.exports = { curry,
  reduce,
  reduceWhile,
  argTransform,
  every,
  aperture,
  cond,
  head,
  any,
  always,
  T,
  F,
  identity,
  truthy,
  falsy,
  last,
  contains,
  containsItemLast,
  isNil,
  sameAs,
  pipe,
  headN,
  assoc,
  prop,
  propOr,
  tail,
  compose,
  filter,
  split,
  dropN,
  dropHeadAndTail,
  map }
