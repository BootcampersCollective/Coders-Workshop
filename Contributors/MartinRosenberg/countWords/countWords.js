#!/usr/bin/env node

const countWords = s => {
  const res = {}
  s.split(' ').forEach(word => {
    if (res[word]) res[word]++
    else res[word] = 1
  })
  return res
}

