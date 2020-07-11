# Consecutive Alphabetical Letters in Python and using Pytest package for testing

def easyCheckConsecutiveLetters(checkString):
    alphaString = 'abcdefghijklmnopqrstuvwxyz'
    # find and return in one statement -- easy
    return checkString.lower() in alphaString

def loopCheckConsecutiveLetters(checkString):
    alphaString = 'abcdefghijklmnopqrstuvwxyz'
    checkString = checkString.lower()

    # Find first character of checkString in alphaString
    firstInString = checkString[0]
    firstInAlpha = alphaString.find(firstInString)

    # Loop through the strings and compare each character
    returnVal = True if firstInAlpha >=0 else False
    checkIdx = 1
    alphaIdx = firstInAlpha
    alphaIdx = firstInAlpha + 1 if alphaIdx < len(alphaString) - 1 else 0
    while returnVal and checkIdx < len(checkString):
        # print(str(checkIdx) + " " + str(alphaIdx))
        # print(checkString[checkIdx] + " and " + alphaString[alphaIdx])
        if checkString[checkIdx] == alphaString[alphaIdx]:
            checkIdx += 1
            alphaIdx += 1 if alphaIdx != len(alphaString) - 1 else 0
        else:
             returnVal = False

    return returnVal

def test_consecutiveAlphabeticalLetters():
    assert easyCheckConsecutiveLetters('abc') == True
    assert loopCheckConsecutiveLetters('abc') == True
    assert easyCheckConsecutiveLetters('AbC') == True
    assert loopCheckConsecutiveLetters('AbC') == True
    assert easyCheckConsecutiveLetters('abd') == False
    assert loopCheckConsecutiveLetters('abd') == False

    assert loopCheckConsecutiveLetters('zab') == True