// 1. Print the Fibonacci series.  

n=12 //+prompt("enter a number")

a=0
b=1
res=[]
for(let i=0;i<n;i++)
{
    res.push(a)
    a=b
    b=res[i]+b
}
console.log(res)