/*
The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.
The second game: same, except that the stopping condition is a five followed by a five.
*/

// 5 then (all other numbers not six that cause me to lose, includes 5) 6

// 5 then (all other numbers not five that cause me to lose)
// function 
// rolls1 = 0
// rolls2 = 0
// game1 = []
// game2 = []


const game = (version) => {
    const rules = {num1: 5, num2: version === 1 ? 6: 5}
    let rolls = 0;
    const rollDice = () => Math.round(Math.random() * 6) + 1;
    let lastRoll = 0;

    while(true){
        const num = rollDice();
        rolls++;
        if(lastRoll === 5 && num === rules.num2){
           return rolls
        } 
        lastRoll = num;
    }

    return rolls;
}

// console.log(game(1))
// console.log(game(2))

let i = 0
let rolls1 = 0
let rolls2 = 0
while (i < 100000) {
	rolls1 += game(1)
	rolls2 += game(2)
	i++
}
console.log(rolls1 / 100000)
console.log(rolls2 / 100000)
