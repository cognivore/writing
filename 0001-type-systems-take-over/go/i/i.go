package main

import (
	"fmt"
	. "doma.dev/s"
)

type Shower interface {
	Show() string
}

func f(a Shower) string {
	return a.Show()
}

func main() {
	var x = Nil{}
	fmt.Println(f(&x))
}
