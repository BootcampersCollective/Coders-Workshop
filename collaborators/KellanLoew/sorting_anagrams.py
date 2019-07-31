#Sort and array of strings so all anagrams are next to each other

def sort_anagrams(array):

    #This function checks if two words are anagrams
    def chk_anagram(word1, word2):
        word1 = list(word1)
        word1_sorted = sorted(word1)
        word2 = list(word2)
        word2_sorted = sorted(word2)
        if word1_sorted == word2_sorted:
            return True
        else:
            return False
    
    anagrams = []
    
    for j in range(0, len(array)): #This loop iterates over the given list, one word at a time
        num_anagrams = 0

        index = j + 1
        while index < len(array): #This loop checks for anagrams between current word in list and each word after it
            if chk_anagram(array[j], array[index]):
                anagrams.append(array[index])
                array.remove(array[index]) #Remove a word found to be an anagram from list, to avoid repeats
                num_anagrams += 1
            else:
                index += 1 
        if num_anagrams > 0:
            anagrams.append(array[j])
            
    return anagrams

myArray = ["god", "acre", "people", "care", "top", "pot", "dog", "gdo", "clap", "race", "hello", "arce", "blob"]
myAnagrams = sort_anagrams(myArray)
print("The given list of words is: {}".format(myArray))
print("The sorted list of anagrams is: {}".format(myAnagrams))