export function embolden(s: string, lst: string[]): string {

  const tracker: boolean[] = [];
  for (let i = 0; i < s.length; i++) {
    tracker.push(false);
  } 
  // check each substring, flip tracker to true
  lst.forEach((sub: string) => {
    const startIndex = s.search(sub);
    if (startIndex === -1) return; // skip to next substring if not found
    const endIndex = startIndex + sub.length - 1;
    for (let i = startIndex; i <= endIndex; i++) {
      tracker[i] = true;
    }
  });
  // now we have tracker filled, now to insert <b/> tags
  // first split the string so it makes my life easier
  const letters = s.split('');
  let lookForTrue = true;

  tracker.forEach((boldBool: boolean, i: number) => {
    if (lookForTrue === boldBool) {
      letters[i] = (lookForTrue) ? `<b>${letters[i]}` : `</b>${letters[i]}`;
      lookForTrue = !lookForTrue;
    }
    // reached end and still didn't find false
    if (i === letters.length - 1 && !lookForTrue) letters[i] = `${letters[i]}</b>`;
  });

  return letters.join('');
}