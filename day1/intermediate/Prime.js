// 2.Check if a number is prime.

function prime(n)
{
    if (n<2)
        return false
    for(let i=2;i<n;i++)
        if(n%i == 0)
            return false
    return true
}

a=5 //+prompt("enter a number")
if(prime(a))
    console.log(a,"is prime number")
else
    console.log(a,"is not a prime number")
