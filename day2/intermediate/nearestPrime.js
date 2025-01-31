// 2. Find the nearest prime number to a given number.

function prime(n) {
    if (n < 2)
        return false
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false
    return true
}

a = 3 //+prompt("enter a number")
if (prime(a))
    console.log(a)
else {
    up = a+1
    dn = a-1
    s=false
    while (true) {
        if(prime(up)){
            console.log(up)
            s=true
        }
        if(prime(dn)){
            console.log(dn)
            s=true
        }
        if(s)
            break
    }
}