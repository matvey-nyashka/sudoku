module.exports = function solveSudoku(matrix) {
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(matrix[i][j] === 0){
        for(let k = 1; k <= 9; k++){
          if(number(matrix, i, j, k)){
            matrix[i][j] = k;
            if(solveSudoku(matrix)){
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function number(matrix, row, column, num){
  for(let index = 0; index < 9; index++){
    let x = 3 * Math.floor(row / 3) + Math.floor(index / 3);
    let y = 3 * Math.floor(column / 3) +index % 3;
    if(matrix[row][index] === num || matrix [index][column] === num || matrix[x][y] === num){
      return false;
    }
  }
  return true;
}
