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
largestPrimeFactor(600851475143)

/*
function largestPrimeFactor(num) {
    // Identify which numbers from 2 up until, and including, the number
    // are prime and are factors of the number
    if(prime(num)) return num;
    for(let i = num/2; i > 1; i--) {
        if(factor(i, num) && prime(i)) return i;
    }
    return "There are no prime factors of this number"
}
console.log(largestPrimeFactor(10))
*/ 

function sortSortedArrays(arr1, arr2){
    let sortedCombo = []
    while(arr1.length && arr2.length){
        if(arr1[0] > arr2[0]){
            sortedCombo.push(arr2[0])
            arr2.shift()
        }
    }
}

function doubleAll(arr) {
    let doubled = [];
    arr.forEach(num => {
        doubled.push(num * 2);
    });
    doubled.forEach(num => {
        console.log(num)
    })
    return doubled;
}

firstTime = '12:01:00 AM'
secondTime = '12:01:00 PM'
function timeConversion(s){
    const [time, mod] = s.split(' ')
    let [hours, minutes, seconds] = time.split(':')
    if(hours==='12'){
        hours = '00'
    } 
    if(mod === 'PM'){
        hours = parseInt(hours, 10) + 12
    }
    return `${hours}:${minutes}:${seconds}`
}
console.log(timeConversion(firstTime))


function climbingLeaderboard(ranked, player) {
    for(let i = 0; i < player.length; i++) {
        let duplicates = 0;
        for(let j = 0; j < ranked.length; j++) {
            if(ranked[j] === ranked[j - 1]) {
                duplicates++;
            } else if(player[i] >= ranked[j]) {
                player[i] = j + 1 - duplicates;
                break;
            } else if(j + 1 === ranked.length) player[i] = ranked.length + 1 - duplicates;
        }
    }
    return player;
}
