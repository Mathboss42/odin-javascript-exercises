const ftoc = function(baseTemp) {
  let convertedTemp = (baseTemp - 32) * (5/9);
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

const ctof = function(baseTemp) {
  let convertedTemp = baseTemp * (9/5) + 32;
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
