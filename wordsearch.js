const transpose = function (matrix) {
  // make new array
  const newArray = [];
  const rows = matrix[0].length;
  const columns = matrix.length;
  for (let x = 0; x < matrix[0].length; x++) {
      newArray.push([]);
  }
  // added blank arrays to newArray

  for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
          newArray[j].push(matrix[i][j])
      }
  }
  // it's going to access the first array, array[0] and return array[0].length
  // the length is going to be the number of arrays, push that # of blank arrays into new array
  // access the first element of each array. 
  // those elements are placed in row #1

  return newArray;

};



const wordSearch = (letters, word) => {
  if(!letters.length) {
      return false;
  }
  /* frontwards */
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      }
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (l of verticalJoin) {
      if (l.includes(word)) {
          return true;
      }
  }
  /* backwards */
  const flipWord = word.split('').reverse().join('');
  for (l of verticalJoin) {
      if (l.includes(flipWord)) {
          return true;
      }
  }
  for (l of horizontalJoin) {
      if (l.includes(flipWord)) {
          return true;
      }
  }

  return false;
};

module.exports = wordSearch