// 1.Determine if a number is even or odd:
// * Using the modulus operator (%).
// * Using the floor division method.
// * Using bitwise operations (&).

n=15 //+prompt("enter a number")

// * Using the modulus operator (%).
if(n%2 == 0)
console.log(n,"is even number")
else
console.log(n,"is odd number")

// * Using the floor division method.
if(Math.floor(n/2) == n/2)
console.log(n,"is even number")
else
console.log(n,"is odd number")

// * Using bitwise operations (&).
if(!(n & 1))
console.log(n,"is even number")
else
console.log(n,"is odd number")



