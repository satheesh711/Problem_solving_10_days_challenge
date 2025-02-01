// 3. Check if a number is an Armstrong number.  

n = 153 //+prompt("enter a number")
temp = n
s = 0
d = 0
while (temp > 0) {
    temp = Math.floor(temp / 10)
    d += 1
}
temp=n
while (temp > 0) {
    rem=temp%10
    s+=power(rem,d)
    temp = Math.floor(temp / 10)
}

function power(k,m)
{
    let power=k
    for(let i=1;i<m;i++)
        power*=k
    return power
}
if(s == n)
{
    console.log("Armstrong number")
}
else
{
    console.log("not a Armstrong number")
}
