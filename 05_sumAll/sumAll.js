const sumAll = function(start, end) {
    
    const array = [start, end];

    console.log(array.every(element => element > 0 || element != null))

    if ((start < 0 || end < 0)) {
        return 'ERROR';
    } else if (typeof start !== 'number' || typeof end !== 'number') { 
        return 'ERROR';
    } else if (start > end) {
        array.reverse();
    }

    let sum = 0;
    
    for (let i = array[0]; i <= array[1]; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
