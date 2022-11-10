const findTheOldest = function(array) {
    return array.reduce(function(a, b) {
        let lastOne;
        let currentOne;
        if (a.yearOfDeath === undefined) {
            lastOne = ((new Date()).getFullYear()) - a.yearOfBirth;
        } else {
            lastOne = a.yearOfDeath - a.yearOfBirth; 
        }
        if (b.yearOfDeath === undefined) {
            currentOne = ((new Date()).getFullYear()) - b.yearOfBirth;
        } else {
            currentOne = b.yearOfDeath - b.yearOfBirth; 
        }
        console.log(`${lastOne} vs ${currentOne}`);
        return lastOne > currentOne ? a : b;
    }, 0)
};

// Do not edit below this line
module.exports = findTheOldest;
