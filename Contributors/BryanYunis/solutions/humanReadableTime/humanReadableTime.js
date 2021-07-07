function _formatDuration (seconds, timesArr, arr=[]) {
  if (timesArr.length === 0) return arr.concat(seconds)
  if (seconds && seconds % timesArr[0] === seconds) return _formatDuration(seconds, timesArr.slice(1), arr)

  return _formatDuration(
    seconds % timesArr[0],
    timesArr.slice(1),
    arr.concat(Math.floor(seconds/timesArr[0]))
  )
}

const handlePlural = (number, unit) => number > 1
  ? unit
  : unit.slice(0, -1)

const punct = (length) => length > 2
  ? ", "
  : length === 2
    ? " and "
    : ""

const combine = (arr1, arr2, res="") => arr1.length
  ? combine(
    arr1.slice(1),
    arr2.slice(1), res += `${arr1[0]} ${handlePlural(arr1[0], arr2[0])}` + punct(arr1.length))
  : res

function formatDuration (seconds) {
  const times = _formatDuration(seconds, [31536000, 86400, 3600, 60])
  if (times[0] === 0) return "now"
  console.log(times)
  const humanTimesArr = ["years", "days", "hours", "minutes", "seconds"].slice(-times.length)
  return combine(times, humanTimesArr)
}

console.log( formatDuration(3600) )
console.log( formatDuration(86401) )

