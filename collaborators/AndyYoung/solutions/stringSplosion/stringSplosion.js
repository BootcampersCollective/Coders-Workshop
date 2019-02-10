function stringSplosion(str) {
  let result = str;
  for (let i = 0; i > str.length * -1; i--) {
      result = str.slice(0, i) + result;
  }
  return result;
}


stringSplosion("Code") //→ "CCoCodCode"
stringSplosion("abc")  //→ "aababc"
stringSplosion("ab")   //→ "aab"