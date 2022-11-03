const removeFromArray = function(array, ...elementsToRemove) {
    //parse array and get indices of elements to remove
        //compare each element from array with element from toRemove
        //if equal, then remove
        //if not, continue parsing
    // remove elements for each provided

    // for (element of arguments) {
    //     console.log(`loop 1: ${element}`)
    //     for (subElement of elementsToRemove) {
    //         if (subElement === element) {
    //             console.log(`loop 2: ${element}`)
    //             array.splice(element-1, 1);
    //         }
    //     }
    // }

    // for (let i = 0; i < array.length; i++) {
    //     console.log(`loop 1: ${i}`)
    //     for (subElement of elementsToRemove) {
    //         if (subElement === array[i]) {
    //             console.log(`loop 2: ${i}`)
    //             array.splice(i, 1);
    //         }
    //     }
    // }

    for (subElement of elementsToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (subElement === array[i]) {
                console.log(`loop 2: ${i}`)
                array.splice(i, 1);
            }
        }
    }

//error because when splices for the first time, gets rid of an element and therefore array length is decreased, and indices are changed
//solution to that problem was to parse the elements to remove first and compare them with each one of the array
//therefore using the new length of the array each time it is spliced 

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
