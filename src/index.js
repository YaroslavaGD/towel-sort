module.exports = function towelSort (matrix) {

  if (!Array.isArray(matrix) || matrix.length == 0) return [];

  let result = matrix.map((element, index) => {
    return (index % 2) !== 0 ? element.reverse() : element;
  });  

  return result.toString()
               .split(',')
               .map(element => parseInt(element));
}
