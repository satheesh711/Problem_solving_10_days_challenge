// 1. Find the sum of prime digits in a number.

function prime(n)
{
    if (n<2)
        return false
    for(let i=2;i<n;i++)
        if(n%i==0)
            return false
    return true
}

let num=2345 //+prompt("enter a number")
let s=0
while(num>0)
{
    rem=num%10
    if(prime(rem))
        s+=rem
    num=Math.floor(num/10)
}
console.log(s)