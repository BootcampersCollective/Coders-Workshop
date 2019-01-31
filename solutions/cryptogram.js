function cryptogram(str, arr) {
  let lgToSm = arr.sort((a, b) => b.length - a.length);
  let answer = "";
  lgToSm.some(el => {
    if (answer) return answer;
    for (let i = 0; i < el.length; i++) {
      if (el.indexOf(el[i]) <= str.indexOf(el.charAt(i))) {
        answer += el[i];
      } else break;
    }
  });
  return answer;
}

console.log(
  cryptogram("abpplee", ["able", "ale", "apple", "bale", "kangaroo"])
); // 'apple'
