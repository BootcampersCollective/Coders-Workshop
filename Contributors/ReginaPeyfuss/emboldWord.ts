/**
 * functions and test to embold word
 * @param word
 * @param subWordsToBold
 */

const constructLettersToBoldList = (word, subWordsToBold) => {
    let lettersToBoldList = new Array(word.length).fill(false);
    for (let index = 0; index < subWordsToBold.length; index = index + 1) {
        let boldWord = subWordsToBold[index];
        let foundIndex = word.indexOf(boldWord);
        if (foundIndex == -1) continue;
        let end = foundIndex + boldWord.length;
        while (foundIndex < end) {
            lettersToBoldList[foundIndex] = true;
            foundIndex++;
        }
    }
    return lettersToBoldList;
};

const constructBoldWorld = (word, lettersToBoldList) => {
    let emboldedWord = "";
    let i = 0;
    while (i < lettersToBoldList.length) {
        let start = i;
        let end = i;
        let isTrue = lettersToBoldList[i];

        if (isTrue) {
            while (isTrue) {
                end += 1;
                isTrue = lettersToBoldList[end];
            }
            emboldedWord = emboldedWord + '<b>' + word.substring(start, end) + "</b>";
            i = end
        } else {
            emboldedWord = emboldedWord + word[i];
            i++;
        }
    }
    return emboldedWord;
};

describe('embold-word', () => {

    it('should bold parts of the string', () => {
        const originalWord = "abcdefgf";
        const expectedResult = "a<b>bc</b>de<b>fg</b>f";

        let list = constructLettersToBoldList(originalWord, ["bc", "fg"]);
        expect(list).toEqual([false, true, true, false, false, true, true, false]);
        list = constructLettersToBoldList(originalWord, ["bc", "rn"]);
        expect(list).toEqual([false, true, true, false, false, false, false, false]);

        let lettersToBold = constructLettersToBoldList(originalWord, ["bc", "fg"]);
        expect(constructBoldWorld(originalWord, lettersToBold)).toEqual(expectedResult);
        lettersToBold = constructLettersToBoldList(originalWord, ["bc", "rn"]);
        expect(constructBoldWorld(originalWord, lettersToBold)).toEqual("a<b>bc</b>defgf");
    })
});

