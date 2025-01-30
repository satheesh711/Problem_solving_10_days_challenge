// 3.Calculate the factorial of a number:
// * Without recursion.
// * With recursion.


n=1 //+prompt("enter a number")

// * Without recursion.
fact=1

if(n>=0)
{
    for(let i=1;i<=n;i++)
    {
        fact*=i
    }
    console.log(n,"factorial is:",fact)
}
else
    console.log("factorial is not posible")

// * With recursion.
n=5
function factorial(k)
{
    if (k<=1)
        return 1
    return k*factorial(k-1)
}
if(n>=0){
    fact=factorial(n)
    console.log(n,fact)
}
else
console.log("factorial is not posible")


