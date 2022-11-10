const palindromes = function (string) {
    const newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").toLowerCase().split(' ').join('');
    return newString.split('').reverse().join('') === newString;
};

// Do not edit below this line
module.exports = palindromes;
