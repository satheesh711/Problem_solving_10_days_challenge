// 1. Find the LCM of two numbers.

a=25 //+prompt("enter  number")
b=3 //+prompt("enter number")
if(a<b)
    a,b=[b,a]
k=1
while(true)
{
    if((a*k)%b == 0)
    break
    k++
}
console.log("Lcm of ",a,b,"is ",a*k)