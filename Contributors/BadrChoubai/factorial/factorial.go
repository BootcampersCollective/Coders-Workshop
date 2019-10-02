package main

func factorial(n int) int {
	result := 1
	if n > 1 {
		result = n * factorial(n-1)
	}
	return result
}

func main() {
	factorial(12)
}
