const sortNums = (num, dir) => parseInt(num
  .toString()
  .split("")
  .sort(dir === "asc"
    ? ((a, b) => b - a)
    : ((a, b) => a - b))
  .join("")
, 10)

const kaprekarsConstant = (n, count=0) => n === 6174
  ? count
  : kaprekarsConstant(sortNums(n, "asc") - sortNums(n, "desc"), count + 1)


console.assert(kaprekarsConstant(1234) === 3)
console.log("👍")
