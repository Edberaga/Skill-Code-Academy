function recursiveRandomNumberGenerator(n, seed = 1) {
    let a = 1103;
    let c = 1234;
    let m = 2**31;

    if(n === 0) {
        return seed;
    }
    
    const previousNumber = recursiveRandomNumberGenerator(n -1, seed);
    const newNumber = (a * previousNumber + c) % m;

    return newNumber;
}

console.log(recursiveRandomNumberGenerator(100));