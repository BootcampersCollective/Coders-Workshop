// For example, if A is `abcade` and B is `cadeab`, return `true`. If A is `abc` and B is `acb`, return `false`.
const ss = (a, b) => {
	let i = 0, j = i, k = 0;
	const alen = a.length, blen = b.length;
	while (i < alen) {
		k = 0
		if (a[i] == b[k]) {
			let j = i;
			while (k < blen) {
				if (a[j] != b[k])
					break;
				else {
					j = (j + 1) % alen;
					k++;
				}
			}
			if (k == alen) return true;
		}
		i++;
	}
	return false;
}
console.log( ss('abcade','cadeab') );
console.log( ss('abc','acb') );
console.log( ss('pqrstuv','vpqrstu') );
console.log( ss('mlllo','lllom') );
console.log( ss('mlllo','llom') );
