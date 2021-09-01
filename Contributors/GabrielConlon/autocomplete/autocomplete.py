#!/usr/bin/env python3

def autocomplete(choice, options):
    possibilities = [pos for pos in options if choice == pos[0:len(choice)]]

    return possibilities

def main():
    print(autocomplete("ed", ["educate", "edify", "opted"]))

if __name__ == "__main__":
    main()