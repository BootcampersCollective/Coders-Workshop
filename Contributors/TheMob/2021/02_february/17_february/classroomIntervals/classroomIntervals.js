// given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// for example, given `[[30, 75], [0, 50], [60, 150]]`, you should return `2`.

// iterate through intervals array, start w first interval, pop every lecture that doesn't have conflict

// sort by start time

// keep an array of classrooms, take first input, put it in first class -> find end time
function howManyClassrooms(...intervals) {
  const intervalsSorted = intervals.slice().sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    }
    if (a[0] > b[0]) {
      return 1
    }
    return 0
  })
  //Push the end time to this array if conflict exists, otherwise modify the earliest slot
  //Return length
  let roomEndTimes = []
  roomEndTimes.push(intervalsSorted[0][1]) //Add *first* class's end time

  for (const interval of intervalsSorted) {
    const arrSize = roomEndTimes.length
  }

  const classrooms = [[]]
  for (const interval of intervalsSorted) {
    for (let i = 0; i < classrooms.length; i += 1) {
      console.log(classrooms)
      const room = classrooms[i]
      if (!room.length) {
        room.push(interval)
        break
      } else if (interval[0] > room[1]) {
        room.pop()
        room.push(interval)
        break
      } else if (i === classrooms.length - 1) {
        classrooms.push([interval])
      }
    }
  }
  return classrooms.length
}
console.log(howManyClassrooms([30, 75], [0, 50], [60, 150], [30, 75]))
// console.log(howManyClassrooms([30, 75], [0, 150], [60, 150]))

// [0, 50], [30, 75], [60, 150], [30, 75]
/*
[0, 50]
[60, 150]

[30, 75]


[30, 75]

*/
//seems similar to chat question from last time
//at each time, can we tell how many are concurrent
//at 0, how many are going? 1
//at 30, how many are going? 2
//at 60, how many are going? 2
//return max of above?

//M looks good
//M should we implement this one?
//M but should we also sort it before the for loop?

// how do we get an array of all the timestamps?
// 0, 30, 60
