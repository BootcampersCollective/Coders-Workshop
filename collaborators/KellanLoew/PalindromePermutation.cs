//Author: Kellan Loew
//Date: 8/5/2019
//This program checks if two words or sentences are palindromes.
//To test, copy the class below into a C# compiler.

using System;

class PalindromePermutation
{
    static void Main()
    {
        string myString = "Eve damned Eden, mad Eve.";
        Console.Write(PalindromeCheck(myString));
        Console.Read();
    }

    static bool PalindromeCheck(string str)
    {
        int evens = 0;
        int odds = 0;
        int[] ASCII = new int[128];

        foreach(char character in str)
        {
            if((int)character != 32 && (int)character != 44 && (int)character != 46)
            {
                ASCII[(int)character] += 1;
            }
        }

        foreach (int ASCII_VAL in ASCII)
        {
            if(ASCII_VAL % 2 == 0)
            {
                evens++;
            }
            else
            {
                odds++;
            }
        }
            
        if (odds > 1)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}
