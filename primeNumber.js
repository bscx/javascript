let number = process.argv.slice(2);

function isPrime(n) {
    let prime = n;
    
    for (let i = 2; i * i < n + 1; i++) {
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
            process.stdout.write("Current prime: " + i + "\033[0G");
            listOfPrimeNumbers.push(i);
        }
    }
    return listOfPrimeNumbers;
}

console.log(returnListOfPrimeNumbers(number));