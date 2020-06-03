from string import ascii_lowercase


def unique_chars(word: str, first: bool = False) -> list:
    '''unique chars
    This function returns uniqe characters in a given string.

    the optional parameter first, lets the function know if we would like
    all of or just the first unique character(s) in a given string.
    '''
    counter = dict(zip(ascii_lowercase, [0]*26))
    uniques = []

    for char in word:
        if char in counter:
            counter[char] += 1
        else:
            counter[char] = 1

    for char in word:
        if counter[char] == 1:
            uniques.append(char)
            if first:
                break

    return uniques


print(unique_chars("supercalifragilistic", True))
print(unique_chars("supercalifragilistic"))
