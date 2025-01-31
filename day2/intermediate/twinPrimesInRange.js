// 3. Find all twin primes in a given range.

function prime(n)
{
    if (n<2)
        return false
    for(let i=2;i<n;i++)
        if(n%i==0)
            return false
    return true
}

a=1 //+prompt("enter a number")
b=73 //+prompt("enter a number")
res=[]
for(let i=a;i<=b-2;i++)
{
    if(prime(i))
        if(prime(i+2))
            res.push([i,i+2])
}
console.log(...res)