// 3. Check if a number is a perfect number.

a=28 //+prompt("enter  number")
s=0
for(let j=1;j<a;j++)
{
    if(a%j==0)
        s+=j
}
if(s==a)
console.log("perfect number")
else
console.log("not a perfect number")