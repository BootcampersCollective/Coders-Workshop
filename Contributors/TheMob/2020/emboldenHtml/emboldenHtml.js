// Implement the function embolden(s, lst) which takes in a string s and list of substrings lst,
// and wraps all substrings in s with an HTML bold tag `<b>` and `</b>`.

// For example, given `s = abcdefg` and `lst = ["bc", "ef"]`, return the string `a<b>bc</b>d<b>ef</b>g`.

const assert = require("assert");

const emboldened = (s, list) => {
  let boldHTML = list.map((el) => `<b>${el}</b>`);
  console.log("boldHTML: ", boldHTML);

  list.forEach((listItem, index) => {
    s = s.replace(listItem, boldHTML[index]);
  });
  console.log("s: ", s);
};

emboldened("abcdefg", ["bc", "ef"]);

// assert.deepEqual(emboldened("abcdefg", ["bc", "ef"]), "a<b>bc</b>d<b>ef</b>g");
