# Fuzzy Match

You are tasked with creating software that reads and interprets documents. In the course of this software's workflow, it encounters errors that are often the result of typos or text recognition faults. For instance, the name Kat is misinterpreted as Pat, or Kimbeerly is a typo of Kimberly.

Depending on the data field, your company finds a certain level of error acceptable. Given an object with a set of background data, a term, and an acceptable percentage accuracy, return the corrected word. If no such word exists, return null.

For purposes of this function
* Insertion, deletion, and replacement each count as one change
* Swapping characters counts as two changes, *unless the swapped characters are adjacent*, in which case it counts as one change.

juniper -> jiniper: 1 change, .857 accuracy
mark -> makr: 1 change (adjacent swap), .75 accuracy
navl -> naval: 1 change, .80 accuracy
almarilo -> amarillo: 2 changes (non-adjacent swap), .75 accuracy

Accuracy is calculated as 1 - ((number of changes required) / (corrected word length))

For example, given background data

```
{ 
    first: 'Matthew',
    middle: 'P',
    last: 'Yastar',
    address_number: '153',
    address_street: 'Hemmings',
    address_city: 'Elkhorn',
    address_state: 'Idaho',
    address_code: '89255',
    primary_bank: 'Alliant',
    primary_bank_type: 'Individual Checking'
}
```

search term `Hemmengs` and accuracy `.86`, return `Hemmings`, since `Hemmengs` is one character off, representing .875 accuracy, within the acceptable threshhold.

Given the same background data, search term `Yester`, and accuracy `.88` return `null`, as no item in the data is with 88% accuracy of the search term.

* The search should not be case-sensitive (e.g. `hemmengs` should produce the same result in the first example). 
* The accuracy of the returned result must be at least the accuracy inputted to the function, but may equal it exactly.
* The shape, properties, and other characteristics of the background data are unimportant to your function. The data simply serves as context your function can use to guess intended words. The background data's keys should not be used, and object values other than strings may be ignored.

