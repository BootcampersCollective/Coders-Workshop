#!/usr/bin/env python3

def count_of_ones(n):
    # count number of '1's
    count = 0
    for i in n:
        if i == "1":
            count += 1
    return count

def nextBiggestInteger(n):
    first_int = count_of_ones(str(bin(n)))

    i = n + 1
    while True:
        if count_of_ones(str(bin(i))) == first_int:
            return i 
        else:
            i += 1

def main():
    # User entered integer
    user_entry = input("Enter any integer: ")

    # get next biggest integer
    nbi = nextBiggestInteger(int(user_entry))

    print(f"Next biggest integer: {nbi}")

if __name__ == "__main__":
    main()
