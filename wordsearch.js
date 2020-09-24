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



const diagonalTranspose = (matrix) => {
  /* Assume square matrix, creates empty array needed */
  const diagonalMatrixRight = [...Array(matrix.length * 2 - 1)].map(() => []);
  const diagonalMatrixLeft = [...Array(matrix.length * 2 - 1)].map(() => []);

    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        let differenceOfIndex = i - j;
        let sumOfIndex = i + j;

        const whichDiagIndexRight = matrix.length - 1 + differenceOfIndex;
        const whichDiagIndexLeft = sumOfIndex;

        diagonalMatrixRight[whichDiagIndexRight].push(matrix[i][j]);
        diagonalMatrixLeft[whichDiagIndexLeft].push(matrix[i][j]);
      }      
  }
  
  return { left: diagonalMatrixLeft, right: diagonalMatrixRight };

  /*  */
  //diags right
  // 0,2            //difference of index = -2    //0
  // 0,1 1,2        //difference of index = -1    //1
  // 0,0 1,1 2,2    //difference of index = 0     //2
  // 1,0 2,1        //difference of index = 1     //3
  // 2,0            //difference of index = 2     //4
                          
  //diags left        
  //0,0             //sum of index = 0            //0 
  //1,0 0,1         //sum of index = 1            //1
  //2,0 1,1 0,2     //sum of index = 2            //2
  //1,2 2,1         //sum of index = 3            //3
  //2,2             //sum of index = 4            //4

}



const rowCheck = (matrix, word) => {
  const wordReverse = word.split('').reverse().join('');
  const checkRow = matrix.some(row => row.join('').includes(word));
  const checkRowReverse = matrix.some(row => row.join('').includes(wordReverse));
  return checkRow || checkRowReverse; 
}

const wordSearch = (matrix, word) => {
  if(!matrix.length) {
    return false;
  }
  const matrices = [
    matrix,
    transpose(matrix),
    diagonalTranspose(matrix).left,
    diagonalTranspose(matrix).right
  ];
  
  return matrices.some(matrix => rowCheck(matrix, word));
}

module.exports = wordSearch