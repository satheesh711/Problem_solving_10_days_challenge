// 2. Find the GCD of two numbers.
a=15 //+prompt("enter  number")
b=5 //+prompt("enter number")
if(a<b)
    a,b=[b,a]
k=b
while(true)
{
    if((a)%k == 0)
    break
    k--
}
console.log("gcd of ",a,b,"is ",k)