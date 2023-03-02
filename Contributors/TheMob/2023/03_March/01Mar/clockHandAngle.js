
//Given a clock time in `hh:mm` format, determine, to the nearest degree, the angle between the hour and the minute hands.
// for example, given 03:15, your function should return 7.5

// assign variables to hours and minutes, parse the time to get digits
// figure out the angle of an hour/minute -- way of computing each hour and minute, function for each computeHourAngle(hour) computeMinuteAngle(minute)
// figure out the difference between hour and minute hand
   
    function clockHand(time) {
        let timeArr = time.split(":") // ['03', '15]
        let hour = Number(timeArr[0])
        let min = Number(timeArr[1])
        return Math.round(Math.abs(computeHourAngle(hour, min) - computeMinAngle(min)))
    }

    function computeHourAngle(hour, min) {
        if(hour>12){hour=hour-12}
        return (hour + (min/60)) * 30  //3.25  
    }

    function computeMinAngle(min) {
        return min * 6
    }



console.log(clockHand('03:15')) // should return 8 
console.log(clockHand('15:15')) // 
console.log(clockHand('06:00')) // should return 180 
console.log(clockHand('12:00')) // should return 0
console.log(clockHand('12:45')) // 


// console.log(clockHand('sef:lij')) // should return 8 
