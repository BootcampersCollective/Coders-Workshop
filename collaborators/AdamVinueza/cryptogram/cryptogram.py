'''
finds the longest subsequence in the target string from a set of candidate
words.
'''
def _is_subsequence(candidate, target):
    '''
    Recursively checks if a candidate string is a subsequence of the target
    string.
    '''
    try:
        idx = target.index(candidate[0])
        return is_subsequence(candidate[1:], target[idx:])
    except IndexError: # w is empty, so we're done
        return True
    except ValueError: # w[0] is not in S, so w isn't a subsequence
        return False
        
def _get_sorted_list_longest_first(candidates):
    '''
    Takes the input data structure returns a list of its elements,
    sorted by length. For simplicity, we'll assume the input structure
    is a list.
    '''
    return sorted(candidates, key=len, reverse=True)

def get_longest_subsequence(target, candidates):
    '''
    Returns the word from candidates that is the longest subsequence in the
    target string, or None if there is none.
    '''
    candidates = get_sorted_list_longest_first(candidates)
    for candidate in candidates:
        if is_subsequence(candidate, target):
            return candidate 
    return None

