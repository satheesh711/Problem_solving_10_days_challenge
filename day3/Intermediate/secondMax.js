// 2. Find the second maximum in a given array without sorting it.  

arr=[1,1,2]
if(arr.length<2)
{
    console.log("second maximun not posible")
}
else
{
    frst=arr[0]
    sec=arr[1]
    if(frst<sec)
    {
        [frst,sec]=[sec,frst]
    }
    for(let i=2;i<arr.length;i++)
    {
        if(arr[i]>sec)
        {
            if(arr[i]>frst)
            {
                sec=frst
                frst=arr[i]
            }
            else
            sec=arr[i]
        }
    }
    if(frst == sec)
        console.log("second max not posible")
    else
        console.log(sec)
}