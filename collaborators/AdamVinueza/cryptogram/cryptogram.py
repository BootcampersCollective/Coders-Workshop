#!/usr/bin/python

def is_subsequence(w, s):
    # subsequences can't be longer than s
    if len(s) < len(w):
        return False
    try:
        idx = s.index(w[0])
        return is_subsequence(w[1:], s[idx:])
    except:
        '''
        If w is empty, the whole string is a subsequence.
        If w is not empty, w[0] isn't in s.
        '''
        return False if w else True
        

def get_longest_subsequence(s, words):
    # sort by size
    words = sorted(words, key=lambda x: len(x), reverse=True)
    # the first match is now by definition longest
    for word in words:
        if is_subsequence(word, s):
            return word 
    return None

if __name__ == '__main__':
    words = [ 'apple', 'able', 'ale', 'bale', 'appple', 'kangaroo' ]
    s = 'abppplee'
    longest = get_longest_subsequence(s, words)
    if longest == None:
        print('No longest subsequence')
    else:
        print(longest)
