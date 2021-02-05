import random
TEST_RUNS = 5
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

def all_unique(string) -> bool:
    pass

def run_test(string_length:int = 26) -> bool:
    test_case:bool = True
    char_list = alphabet.copy()
    test_str = ""

    for x in range(string_length):
        test_str += char_list.pop(random.randint(0, len(char_list)-1))

    if(random.randint(0, 1) == 1):
        test_case = False
        vector = [random.randint(0, len(test_str)-1), random.randint(0, len(test_str)-1)]
        while vector[0] == vector [1]:
            vector[1] = random.randint(0, len(test_str)-1)
        test_str = test_str.replace(test_str[vector[0]], test_str[vector[1]])

    '''
    #Uncomment for debug output    
    print("Test input: " + str(test_str))
    print("Test case: " + str(test_case))
    print("Result: " + str(test_case == all_unique(test_str)))
    '''
    return test_case == all_unique(test_str)

for x in range(TEST_RUNS):
    assert(run_test())
