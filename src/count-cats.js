module.exports = function countCats(backyard) {
  return [].concat(...backyard).filter(n => n === "^^" ).length
};
