// 5.Swap two variables:
// * Using a third variable.
// * Without using a third variable.
// * Using XOR.

a=10 //+prompt("enter a number")
b=15 //+prompt("enter a number")

// * Using a third variable.
console.log("before swap a and b values:",a,b)
temp = a
a=b
b=temp
console.log("after swap a and b values:",a,b)


// * Without using a third variable.
console.log("before swap a and b values:",a,b)
a=a+b
b=a-b
a=a-b
console.log("after swap a and b values:",a,b)

// * Using XOR.
console.log("before swap a and b values:",a,b)
a=a^b
b=a^b
a=a^b
console.log("after swap a and b values:",a,b)

