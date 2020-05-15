function greaterThan(n) {
    console.log(n);
    return m => m > n;
}

// console.log((greaterThan(10))(11));

let newGreaterThan = greaterThan(10);
console.log(newGreaterThan(11));