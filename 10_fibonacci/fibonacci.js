const fibonacci = function(a) {
    const fibonacci = [1, 1];
    for (let i = 1; i <= a; i++) {
        fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2])
    }
    return a > 0 ? fibonacci[a-1] : 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
