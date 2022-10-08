function prime(num) {
    // A prime number is only divisible by 1 or itself
    for(let i = 2; i < num / 2; i++) {
        if(num % i === 0) return false;
    }
    return true;
}
console.log(prime(1))

function isPrime(n){
    let sqrt = Math.sqrt(n)
    let primeN = n != 1
    for(i=2; i<sqrt; i++){
        if(n%1 === 0){
            primeN = false 
        }
    }
    return true 
}
console.log(isPrime(Math.PI))

function factor(n1, n2){
    if(n2 % n1 === 0) return true 
    return false 
}
console.log(factor(11, 22))

function largestPrimeFactor(n){
    let i = 2
    while(i<=n){
        if(n%i === 0){
            n /= i
        } else{
            i++
        }
    }
    console.log(i)
}
largestPrimeFactor(100)