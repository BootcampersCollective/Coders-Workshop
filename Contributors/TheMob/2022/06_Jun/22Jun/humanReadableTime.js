const assert = require('assert');

// For example, an input of `1432` should return `00:23:52`

// conversion
// convert number into hours (round using Math.floor()): input / 3600
// convert what's left into minutes: input % 3600 = remainder
// take remainder, divide by 60 to get minutes
// convert what's left into seconds using ^ % 60

// make sure the number doesn't exceed 35,999
// add to string




function humanReadableTime(seconds) {
    if(seconds > 35999) throw new Error("input is to large")
	// convert number into hours (round using Math.floor()): input / 3600
	const hours = Math.floor(seconds / 3600);
	// convert what's left into minutes: input % 3600 = remainder
	const remainder = seconds % 3600;
	// take remainder, divide by 60 to get minutes
	const minutes = Math.floor(remainder / 60);
	// convert what's left into seconds using ^ % 60
	const secondsLeft = remainder % 60;

	// make sure each unit is 2 digits

	// add each unit to an array, iterate over array, convert each number to a string, if string is fewer than 2 digits,
	// add a 0 at the beginning
    const numArr = [hours, minutes, secondsLeft].map(unit => {
        let string = `${unit}`
        if (string.length < 2) string = `0${string}`
        return string
    })

	return numArr.join(":")
}


assert.deepStrictEqual(humanReadableTime(1432), '00:23:52', 'Human Readable Time was supposed to be 00:23:52 and it wasn\'t');
assert.deepStrictEqual(humanReadableTime(120), '00:02:00', '2:00 failed');
console.log('👍');

const formatTime = (int) => {
    return String(int).padStart(2, '0')
  }
  
  const divMod = (a, b) => {
    return [Math.floor(a / b), a % b];
  }
  
  const humanReadableTimeV2 = (time) => {
    const [div, sec] = divMod(time, 60)
    const [hr, min] = divMod(div, 60)
    return `${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}`
  }

  const humanReadableTimeV3 = (time) => {
    const [div, sec] = divMod(time, 60)
    const [div2, min] = divMod(div, 60)
    const [days, hr] = divMod(div, 24)
    return `${formatTime(days)}:${formatTime(hr)}:${formatTime(min)}:${formatTime(sec)}`
  }
