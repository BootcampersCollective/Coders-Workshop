// Given a clock time in `hh:mm` format, determine, to the nearest degree, the angle between the hour and the minute hands.


// determine where 0 degrees is: 12 o'clock?
// parse input string -> convert to integers
// get absolute value for hour and minute hand
// figure out what each hour and minute represents in terms of degrees from 0
    // hour: hours * 30 + minute * 0.5
    // minute: minutes * 6
// return difference between the two

const clockHandAngle = (hours, minutes) => {

    hours = hours % 12

    const positiveAngle = Math.abs(5.5 * minutes - (30 * hours)) 

    if (positiveAngle > 180) {
        return 360 - positiveAngle
    }
    return Math.round(positiveAngle)
}

// Follow-up: When, during the course of a day, will the angle be zero?

const parse = string => {
    const numbers = time.split(":") // [12, 30]
    let hours = parseInt(numbers[0], 10)
    const minutes = parseInt(numbers[1], 10)
}
const whenWillAngleBeZero = () => {

    const array = []

    for (let hour = 0; hour <= 12 ; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            // const angle = clockHandAngle(hour, minute)
            if (Math.abs(5.5 * minute - 30 * hour) <= 2.5) {
                array.push(`${hour}:${minute}`)
            }
     
        }
    }
    return array
}

console.log(whenWillAngleBeZero())
/**
 * function clockHandAngle(time) { // time is a string in "hh:mm format"
 *  let [hour, minute] = time.split(":").map(parseInt);
 *  hour = hour % 12;
 *  let minuteAngle = (minute/60) * 360;
 *  let hourAngle = (hour/12) * 360 + minuteAngle/12;
 *  let positiveAngle = Math.abs(minuteAngle - hourAngle);
 *  return (positiveAngle > 180) ? 360 - positiveAngle : positiveAngle;
 * }
 */

//  function main() {
// //    let input = '01:15';
// //    let expected = 7.5;
// //    let actual = clockHandAngle(input);
// //    console.log(`Expected: ${expected}, Actual: ${actual}`);
// //    return expected === actual;
//   return whenWillAngleBeZero();
// }

// console.log(main());