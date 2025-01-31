// 4. Check if a number is a perfect square.

a=-1 //+prompt("enter a number")
i=1
flag=false
if(a>=0)
{
while(true)
{
    if((a/i) * (a/i) == a)
    {
        flag=true
        break
    }
    else if((a/i) * (a/i) < a)
        break
    i++
}
}
if(flag)
    console.log("perfect square")
else
    console.log("not a perfect suare")