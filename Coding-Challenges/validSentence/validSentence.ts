export function validSentence(string: string): boolean {
  const TESTS = [startsWithCaps, remainingAllLowers, allValidChars, noMultispaces, validTerminal];
  return TESTS.reduce((passSoFar: boolean, testFunc: (s: string) => boolean): boolean => {
    return passSoFar && testFunc(string);
  }, true);
}

function startsWithCaps(string: string): boolean {
  // is the first character a capitalized letter?
  return string[0] === string[0].toUpperCase();
}

function remainingAllLowers(string: string): boolean {
  // are all the letters after the first all lowercase?
  const remaining = string.slice(1);
  return remaining === remaining.toLowerCase();
}

function allValidChars(string: string): boolean {
  // does it only include valid characters?
  const remaining = string.slice(1);
  return remaining.replace(/[a-z.?!,;: ]/g, '') === '';
}

function noMultispaces(string: string): boolean {
  // are there no multiple-consecutive spaces?
  const strArr = string.split(' ');
  return strArr.indexOf('') === -1;
}

function validTerminal(string: string): boolean {
  // is the last char a terminal (.?!) IMMEDIATELY following a word
  let lastTwo = string.slice(string.length - 2);
  let isLastValid = lastTwo[1].replace(/[.?!]/, '') === '';
  let isSecondLastValid = lastTwo[0].replace(/[a-z]/, '') === '';
  return isLastValid && isSecondLastValid;
}