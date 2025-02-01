// 2. Check if a number is a strong number.

function fact(n)
{
    if(n<=1)
        return 1
    return n*fact(n-1)
}

num=145 //+prompt("enter a number")
sum=0
temp=num
while(temp>0)
{
    rem=temp%10
    sum+=fact(rem)
    temp=Math.floor(temp/10)
}
if(sum == num)
    console.log("Strong number")
else
    console.log("not a strong Number")