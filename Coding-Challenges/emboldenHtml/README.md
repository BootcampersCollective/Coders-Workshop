# Embolden HTML

Implement the function embolden(s, lst) which takes in a string s and list of substrings lst, and wraps all substrings in s with an HTML bold tag `<b>` and `</b>`.

For example, given `s = abcdefg` and `lst = ["bc", "ef"]`, return the string `a<b>bc</b>d<b>ef</b>g`.

Follow-up:  
If two bold tags overlap or are contiguous, they should be merged.  

Given `s = "abcdefg" and lst = ["bcd", "def"]`, return the string `a<b>bcdef</b>g`, since they overlap.
