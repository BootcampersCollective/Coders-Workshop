
import math

# tests if the provided number is a prime number 
def is_prime(number): 
    if type(number) != type(1): # must be an integer 
        return False 
    if number < 3: # must be at least 3 
        return False 
    if number % 2 == 0:  # must NOT be divisible by 2 
        return False 
    if number == 3: # first prime number 
        return True

    # check every number until half 
    denom = 4
    half = math.floor(number / 2) 
    while denom < half: 
        if number % denom == 0: 
            return False 
        denom = denom + 1 
    return True 


# TESTS 

# Function to test the values 
def test_prime():
    """
    Tests the is_prime function to see if it working as expected 
    """
    # some test values 
    test_pairs = [[3, True], [5, True], [4, False], [10, False],[9, True], [7, True], [8, False], [16, False], [21, False], [15, False], [90, False], [41, True]]

    # Loop through the tests 
    for test in test_pairs: 
        # raise assertion error on any number that doesn't pass 
        assert is_prime(test[0]) == test[1], str(test[0]) + ' is prime' if test[1] else ' is not prime' 

if __name__ == '__main__': 
    test_prime() 
