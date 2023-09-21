module.exports = {
  dateGeneration: function () {
    let minDay = 2;
    let maxDay = 7;
    return Math.floor(Math.random() * (maxDay - minDay + 1) + minDay);
  },
  rowGeneration: function () {
    let minRow = 1;
    let maxRow = 11;
    return Math.floor(Math.random() * (maxRow - minRow + 1) + minRow);
  },
  placeGeneration: function () {
    let minPlace = 1;
    let maxPlace = 10;
    return Math.floor(Math.random() * (maxPlace - minPlace + 1) + minPlace);
  },
};
