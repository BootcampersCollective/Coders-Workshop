#Broadcast Month

Find first week of a broadcast month from a given list of broadcast weeks

* You are given a list of broadcast weeks, determine which week includes the start of a
broadcast month. 
* A broadcast month can either have 4 or 5 weeks.
* The first week of a broadcast month must include the first day of the month.
* A broadcast week starts on a Monday and ends on a Sunday.
* A leap year must be taken into consideration.

Your function takes a list of broadcast weeks in the format of Date objects and
is will return a list of Date objects with the first week of all broadcast month included in the input list.

Input: (note date is JS Date) 
`[
  new Date(2019, 10, 18), 
  new Date(2019, 10, 25), 
  new Date(2019, 11, 2),
  new Date(2019, 11, 9),
  new Date(2019, 11, 16),
  new Date(2019, 11, 23),
  new Date(2019, 11, 30),
  new Date(2020, 0, 6),
  new Date(2020, 0, 13),
]`

Output: 
`[  
    new Date(2019, 10, 25), 
    new Date(2019, 11, 30),
]`

Function declaration:
`function findBroadcastMonths(broadcastWeeks: Date[]): Date[]{
}`


