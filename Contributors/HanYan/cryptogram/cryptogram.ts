export function longestCryptogram(s: string, d: string[]): string {
  return d.reduce((longest, substr) => {
    if (isCryptogram(s, substr) && substr.length > longest.length){
      longest = substr;
    }
    return longest;
  }, '')
}

export function isCryptogram(s: string, w: string): boolean {
  /* find the indexOf first letter of w in s
     find the indexOf second letter of w in REMAINDER of s (s.slice(indexOf+1))
     so on until either we run across an indexOf === -1 (return false immediately), OR we reach the end of w without any -1 (return true) */
  let currentIndex = 0;
  for (let char of w) {
    let charIndex = s.slice(currentIndex).indexOf(char);
    if (charIndex === -1) return false;
    currentIndex = charIndex + 1;
  }
  return true;
}