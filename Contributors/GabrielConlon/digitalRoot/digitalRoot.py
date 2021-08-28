#!/usr/bin/env python3

def digitalRoot(startNum):
    digiRoot = str(startNum)

    # recursion
    if type(startNum) != int:
        return None
    elif len(digiRoot) == 1:
        return int(digiRoot)
    else:
        nextNum = 0
        for idx, n in enumerate(digiRoot):
            nextNum += int(digiRoot[idx])
        return digitalRoot(nextNum)

def main():
    pass

if __name__ == "__main__":
    main()