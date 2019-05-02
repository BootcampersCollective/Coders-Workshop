# UTF-8 Combination check

def permutation(string1, string2):
    array1 = [0] * 128
    array2 = [0] * 128

    if len(string1) != len(string2):
        return False
    else:
        for index in range (0, len(string1)):
            curChar = string1[index]
            array1[ord(curChar)] += 1
            
            curChar = string2[index]
            array2[ord(curChar)] += 1
        
        if array1 == array2:
            return True
        else:
            return False

print(permutation("d~goo", "gdoo~"))