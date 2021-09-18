#!/usr/bin/env python3

vowels = "aeiouyAEIOUY"

def removeVowels(stringInput):
    for idx, s in enumerate(stringInput):
        if s in vowels:
            stringInput = stringInput.replace(s, "")
    return stringInput