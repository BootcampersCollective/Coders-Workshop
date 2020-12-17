const hasAllChars = (window, t) => {
  const windowArr = window.split("");
  for (let char of t) {
    let foundIndex = windowArr.indexOf(char);
    if (foundIndex === -1) return false;
    windowArr.splice(foundIndex, 1);
  }
  return true;
}

export default minimumWindow = (s, t) => {
  let resultSoFar = s;
  let found = false;
  let leftIndex = 0, rightIndex = t.length; // starting lengths
  while (rightIndex <= s.length) {
    let substring = s.substr(leftIndex, rightIndex - leftIndex);
    if (substring.length < t.length) {
      rightIndex++;
      continue;
    };
    if (hasAllChars(substring, t)) {
      if (!found) found = true;
      if (substring.length <= resultSoFar.length) resultSoFar = substring;
      leftIndex++;
    } else {
      rightIndex++;
    }
  }
  return found ? resultSoFar : '';
}