const lookAndSay = (str, n) => {
    if (n === 0) return str
    while (n > 0) {
      let pattern = ''
      // initialize string with  '1'
      if (str === '') {
        n--;
        return lookAndSay('1', n)
      }
      let count = 1;
      for (let i = 0; i < str.length; i++) {
        // increment count for repeating numbers until you get a new one
        if (str[i] === str[i+1]) {
          count++;
          continue;
        } else {
          // append count & current number
          pattern += count + str[i]
          // reset count
          count = 1
        }
      }
      n--;
      return lookAndSay(pattern, n)
    }
  }
  
  console.log("01: " + lookAndSay('', 1)) // 1
  console.log("02: " + lookAndSay('', 2)) // 11
  console.log("03: " + lookAndSay('', 3)) // 21
  console.log("04: " + lookAndSay('', 4)) // 1211
  console.log("05: " + lookAndSay('', 5)) // 111221
  console.log("06: " + lookAndSay('', 6)) // 312211
  console.log("07: " + lookAndSay('', 7)) // 13112221
  console.log("08: " + lookAndSay('', 8)) // 1113213211
  console.log("09: " + lookAndSay('', 9)) // 31131211131221
  console.log("10: " + lookAndSay('', 10)) // 13211311123113112211
  console.log("11: " + lookAndSay('', 11)) // 11131221133112132113212221
  console.log("12: " + lookAndSay('', 12)) // 3113112221232112111312211312113211
  console.log("13: " + lookAndSay('', 13)) // 1321132132111213122112311311222113111221131221
  console.log("14: " + lookAndSay('', 14)) // 11131221131211131231121113112221121321132132211331222113112211
  console.log("15: " + lookAndSay('', 15)) // 311311222113111231131112132112311321322112111312211312111322212311322113212221