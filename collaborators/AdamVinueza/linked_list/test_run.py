#!/usr/local/bin/python3
import json
import os.path
from linked_list import Node, LinkedList

def run_test(test):
    lst = LinkedList()
    if 'load_method' in test:
        method = getattr(lst, test['load_method'])
    else:
        method = lst.insertback
    for x in test['input']:
        method(x)
    if 'test_method' in test:
        method = getattr(lst, test['test_method'])
        params = None
        if 'method_parameters' in test:
            params = test['method_parameters']
        method() if params is None else method(*params)
    values = lst.traverse()
    if values != test['expected']:
        message = 'In test "{0}": expected={1}, actual={2}'.format(test['name'],
            str(test['expected']), str(values))
        raise ValueError(message)
        

if __name__ == '__main__':
    full = os.path.join('test_data.json')
    with open(full) as f:
        test_suite = json.load(f)
        for test in test_suite['tests']:
            run_test(test)
        print('{0} tests passed'.format(len(test_suite['tests'])))
