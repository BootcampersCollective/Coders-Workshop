def is_subsequence(candidate, target):
    '''
    Recursively checks if a candidate string is a subsequence of the target
    string.
    '''
    try:
        idx = target.index(candidate[0])
        return is_subsequence(candidate[1:], target[idx:])
    except (IndexError, ValueError):
        return False if candidate else True
        
def get_sorted_list_longest_first(candidates):
    '''
    Takes the input data structure returns a list of its elements,
    sorted by length. For simplicity, we'll assume the input structure
    is a list.
    '''
    return sorted(candidates, key=len, reverse=True)

def get_longest_subsequence(target, candidates):
    candidates = get_sorted_list_longest_first(candidates)
    for candidate in candidates:
        if is_subsequence(candidate, target):
            return candidate 
    return None

