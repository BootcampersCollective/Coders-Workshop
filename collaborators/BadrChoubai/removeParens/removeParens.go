package main

func removeParens(parenString string) int {
	count := 0

	for _, r := range parenString {
		if r == '(' {
			count++
		}
		if r == ')' {
			count--
		}
	}
	return count
}

func main() {
	removeParens("()()(())(()") // 1
}
