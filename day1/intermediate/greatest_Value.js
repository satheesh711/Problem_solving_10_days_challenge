// 1.Find the greatest of three numbers Use ternary operator.

a=100 //+prompt("enter a number")
b=69 //+prompt("enter a number")
c=50 //+prompt("enter a number")

large= (a>=b && a>=c) ? a: (b>=c) ? b : c
console.log("largest value: ",large)