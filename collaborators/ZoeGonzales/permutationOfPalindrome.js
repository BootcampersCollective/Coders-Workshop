const isPermPalin = str => {
    let m = new Map();
    for (c of str) {
      if(m.has(c)) {
        m.set(c, m.get(c)+1);
      } else {
        m.set(c, 1);
      }
    }
    let oddCount = 0;
    m.forEach((v,k) => {
      if (v % 2 === 1) {
        oddCount++;
      } 
    });
    return oddCount < 2;
  }
  
  console.log(isPermPalin('tactcoa')); // true
  console.log(isPermPalin('racecar')); // true
  console.log(isPermPalin('aaabbcc')); // true
  console.log(isPermPalin('kitten')); // false