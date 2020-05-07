vowels = frozenset(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

def disemvowel(src):
    if src is None:
        return src
    return ''.join([ c for c in src if c not in vowels ])
