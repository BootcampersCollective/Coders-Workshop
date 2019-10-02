#!/usr/bin/env node

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const [pivot, ...rest] = arr;

  const left = [];
  const right = [];

  rest.forEach(num => {
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  });

  return quickSort(left).concat(pivot).concat(quickSort(right));
};
