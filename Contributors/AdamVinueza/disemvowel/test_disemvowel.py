from disemvowel import disemvowel
from hypothesis import given
from hypothesis.strategies import text

def do_assert(exp, src):
    assert exp == disemvowel(src)

def test_disemvowel_1():
    src = 'quick'
    exp = 'qck'
    do_assert(exp, src)

def test_disemvowel_2():
    src = 'bcdfg'
    exp = src
    do_assert(exp, src)

def test_disemvowel_3():
    src = None
    exp = src
    do_assert(exp, src)

def test_disemvowel_4():
    src = ''
    exp = src
    do_assert(exp, src)

def test_disemvowel_5():
    src = 'aeiouaeiouaeiou'
    exp = ''
    do_assert(exp, src)

@given(text())
def test_disemvowel_6(src):
    '''
    This replaces each vowel occurrence with the empty string, using built-in
    string functions. It's probably not super efficient.
    '''
    exp = src.translate(
        str.maketrans({
                'a': '',
                'e': '',
                'i': '',
                'o': '',
                'A': '',
                'E': '',
                'I': '',
                'O': '',
                'U': ''
            }
        )
    )
    do_assert(exp, src)
