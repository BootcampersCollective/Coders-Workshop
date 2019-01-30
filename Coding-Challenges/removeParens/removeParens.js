function paren(str) {
	const reg = /\(\)/;
	for (let i = 0; i < str.length; i++) {
		str = str.replace(reg, "");
    }
	return str.length;
}

console.log(paren("()())()")); // 1
console.log(paren("()((()()")); // 2
console.log(paren(")(")); //2