#!/usr/bin/env python3

class Node:

    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BinarySearchTree:

    def __init__(self):
        self.root = None

    def find_closest_value(self, value):
        # TODO: Your code goes here
        pass

    def pre_order(self, lst, node):
        if node is not None:
            lst.append(node.key)
            self.pre_order(lst, node.left)
            self.pre_order(lst, node.right)

    def in_order(self, lst, node):
        if node is not None:
            self.in_order(lst, node.left)
            lst.append(node.key)
            self.in_order(lst, node.right)

    def post_order(self, lst, node):
        if node is not None:
            self.post_order(lst, node.left)
            self.post_order(lst, node.right)
            lst.append(node.key)

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self.insert_node(self.root, key)

    def insert_node(self, node, key):
        if node.key > key:
            if node.left is None:
                node.left = Node(key)
            else:
                self.insert_node(node.left, key)
        if node.key < key:
            if node.right is None:
                node.right = Node(key)
            else:
                self.insert_node(node.right, key)
