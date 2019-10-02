func multiplyAllNotMe(numbers: [Int]) -> [Int] {
  let product = numbers.reduce(1, {x, y in x * y});

  var productArray = Array<Int>()

  for num in numbers {
    productArray.append(product / num)
  }
  return productArray
}

print(multiplyAllNotMe(numbers: [1,2,3,4,5]))