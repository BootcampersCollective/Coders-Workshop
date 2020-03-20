"""By Ian Davis for Bootcampers Collective Coders Workshop on 2/19/20"""
""" This program evaluates a string and determines if it its a real sentence """

validString = 'This is a valid sentence.'
twoSpaces = "This  isn't valid"
firstCharacterNotCapitalized = 'not capitalized'
containsProperNoun = 'Only the firs character can be capitalized Colorado'
lastCharNotTerminator = 'last not terminator'

validCharacters = [',', ';', ':', '.', '?', '!', "'", ' ']

def loopSentence(sentence):
    for i, char in enumerate(sentence[1:]):
        if (char.isalpha() or char in validCharacters):
            print(f'char {char} is valid')
            if sentence[i] == ' ':
                if sentence[i+1] == ' ':
                    print(f'two spaces in a row')
                    return False
            if char.isupper():
                print('no propper nouns!')
                return False

        else:
            print(f'char {char} is not valid')
            return False
    return True

def checkLastLetterTerminator(sentence):
    if sentence[-1] not in ['.', '!', '?']:
        print(f'last character is not a sentence terminator')
        return False
    else:
        return True

def checkFirstLetterUppercase(sentence):
    if sentence[0].isupper():
        print('First letter of the sentence is Uppercase')
        return True
    else:
        print('First letter of the sentence is NOT Uppercase')
        return False   

def combineTests(sentence):
    if(not checkFirstLetterUppercase(sentence) or not loopSentence(sentence)):
        print(f'TESTS FAILED on {sentence}\n')
    else:
        print(f'TESTS PASSED on {sentence}\n')

def main():
    combineTests(validString)
    combineTests(twoSpaces)
    combineTests(firstCharacterNotCapitalized)
    combineTests(containsProperNoun)
    combineTests(lastCharNotTerminator)


if __name__ == "__main__":
    main()
    
