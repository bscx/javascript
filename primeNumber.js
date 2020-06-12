function isPrime(n) {
    let sqrt = Math.floor(Math.sqrt(n));
    let prime = n;
    
    for (let i = 2; i < sqrt + 1; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
    
    return prime;
}

function returnListOfPrimeNumbers(max) {
    let listOfPrimeNumbers = [];
    for (let i = 2; i < max; i++) {
        if (isPrime(i)) {
            listOfPrimeNumbers.push(i);
        }
    }
    return listOfPrimeNumbers;
}

console.log(returnListOfPrimeNumbers(500));