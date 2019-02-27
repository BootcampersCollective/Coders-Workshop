package main

import "fmt"

func fizzBuzz() {
	for i := 1; i <= 100; i++ {
		if i%15 == 0 {
			fmt.Println("Fizzbuzz")
		} else if i%5 == 0 {
			fmt.Println("buzz")
		} else if i%3 == 0 {
			fmt.Println("fizz")
		} else {
			fmt.Println(i)
		}
	}
}

func main() {}
