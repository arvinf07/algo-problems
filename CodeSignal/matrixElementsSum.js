function matrixElementsSum(matrix) {  
  let [validRooms, hauntedIdxs] = [[], []]
  
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] === 0){
              hauntedIdxs.push(j)
          } else if(matrix[i][j] !== 0 && !hauntedIdxs.includes(j)){
              validRooms.push(matrix[i][j])
          }
      }
  }
  return validRooms.reduce((a, b) => a + b, 0)
}

// O(n * m)