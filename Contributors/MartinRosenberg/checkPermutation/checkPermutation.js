#!/usr/bin/env node

const arrayShallowEquals = (a, b) => {
  if (a === b) return true
  const { length } = a
  if (length !== b.length) return false
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * O(log n) time
 */
const checkPermutation = (a, b) =>
  arrayShallowEquals([...a].sort(), [...b].sort())

