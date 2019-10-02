
def subsequence(w, s):
    success = False
    for letter in w:
        dx = s.index(w[0])
        try:
            subsequence(w[1:], s[dx:])
            success = True
        except:
            success = False
    return success

def crytogram(wList, string):
    length = 0
    longest = ""
    for word in wList:
        result = subsequence(word, string)
        if result == True:
            if len(word) >= length:
                length = len(word)
                longest = word
    return longest

string = "abppplee"
wordList = ["ablre", "apple", "ae", "appe", "afrew342r"]

print(crytogram(wordList, string))
