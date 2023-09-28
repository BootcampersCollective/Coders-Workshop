// For example, given `2015`, your function should return `3`; for `1986`, return `1`; and for `2132`, return `1`.

// 13th of every month, what day is it?
// iterate through months
//
// create date =new Date()
// date.setFullYear(year)
// date.setMonth(1) (in the loop) 0-11 or 1-12
// date.setDate(13)
// if(date.getDay() === 5) count++


const countFriday13 = (year) => {
    let count = 0;
    const date = new Date();
    date.setFullYear(year)
    
    for(let month=0; month < 12; month++){
        date.setMonth(month);
        date.setDate(13);
        if(date.getDay() === 5){
            count++;
        }
    }

    return count;
}


const findNextFriday13 = () => {
    let count = 0;
    const date = new Date();
    let isFriday = false;
    let month = date.getMonth()
	let year = date.getFullYear()
    const hasPassed13th = date.getDate() > 12

    if(hasPassed13th){
        month++
    }

   while (!isFriday) {
       month++
       date.setMonth(month)
       date.setDate(13)
       isFriday = date.getDay() === 5 
       if(month === 11){
         month = 0;
         year++;
       } 
    }

    return date.toDateString()
    
    // getMonth
    // if this month pass 13th, getDate() > 12
    //    month++
    //    setDate(13)
    //    isFriday = getDay() === 5  
    // else
    //    setDate(13)
    //    isFriday = getDay() === 5  
    // while !isFriday
    //    month++
    //    setDate(13)

    return count;
}


console.log(countFriday13(2015)); // 3
console.log(countFriday13(1986)); // 1
console.log(countFriday13(2132)); // 1

console.log(findNextFriday13());
