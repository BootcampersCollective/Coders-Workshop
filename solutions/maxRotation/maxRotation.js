function maxRot(n) {
  let nString = n.toString();
  let combos = [nString];
  let initialNum = nString.slice(0, 1);
  let remainingNums = nString.slice(1);
  let currentNum = remainingNums.concat(initialNum);
  combos.push(currentNum);

  for (let i = 0; i < nString.length - 2; i++) {
    let keep = currentNum.slice(0, i + 1);

    let rest = currentNum.slice(i + 1);

    let nextToRotate = rest.slice(0, 1);

    let rotated = rest.concat(nextToRotate);

    let edited = rotated.slice(1);

    let combined = keep.concat(edited);

    currentNum = combined;

    combos.push(currentNum);
  }
  return Math.max(...combos);
}