// 4.Print all the digits in a number.

n=342 //+prompt("enter a number:")

res=[]
while(n>0)
{
    rem=n%10
    res.unshift(rem)
    n=Math.floor(n/10)
}
console.log(...res)