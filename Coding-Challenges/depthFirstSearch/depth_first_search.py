#!/usr/bin/env node

class Node:

    def __init__(self, name):
        self.name = name
        self.children = []

    def add_child(self, name):
        self.children.append(Node(name))
        return self

    def depth_first_search(array):
        pass
        # write your code here


test1 = Node("A")
test1.add_child("B").add_child("C").add_child("D")
test1.children[0].add_child("E").add_child("F")
test1.children[2].add_child("G").add_child("H")
test1.children[0].children[1].add_child("I").add_child("J")
test1.children[2].children[0].add_child("K")

test1.depth_first_search([])
