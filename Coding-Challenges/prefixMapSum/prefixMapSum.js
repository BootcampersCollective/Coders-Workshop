#!/usr/bin/env node

const assert = require('assert')

class PrefixMapSum {
  constructor() {

  }

  insert(key, value) {

  }

  sum(prefix) {

  }
}

const mapSum = new PrefixMapSum()
mapSum.insert("columnar", 3)
assert.strictEqual(mapSum.sum("col"), 3)
mapSum.insert("column", 2)
assert.strictEqual(mapSum.sum("col"), 5)
