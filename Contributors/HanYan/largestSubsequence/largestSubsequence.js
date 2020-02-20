#!/usr/bin/env node

const largestSubsequence = (s1, s2) => {

  const findSubsequence = (str1, str2, initialSeq = '') => {
    if (str1.length === 0) {
      return initialSeq;
    }
    for (let index in str1) {
      let char = str1[index];
      if (str2.length ===0) {
        // reached the end of str1 OR str2
        return;
      } else if (str2.indexOf(char) === -1) {
        // move on to next letter in str1
        continue;
      } else {
        return findSubsequence(str1.slice(index+1), str2.slice(str2.indexOf(char)+1), initialSeq + char);
      }
    }
  }
  // for each letter in s1:, find the index of equivalent letter in s2
    // if not found, move to next s1 letter (exit)
    // if found: add this char, to, (run largest subsequence on remainder of s1 and remainder of s2)
      // if the recursion 
  let longest = '';
  for (let i in s1) {
    let thisSeq = findSubsequence(s1.slice(i+1), s2) || '';
    if (thisSeq.length > longest.length) {
      longest = thisSeq;
    }
  }
  return longest;
};

console.log(largestSubsequence("ABAZDC", "BACBAD")); // "ABAD"
console.log(largestSubsequence("AGGTAB", "GXTXAYB")); // "GTAB"
console.log(largestSubsequence("aaaa", "aa")); // "aa"
console.log(largestSubsequence("", "...")); // ""
console.log(largestSubsequence("ABBA", "ABCABA")); // "ABBA"
