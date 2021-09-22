function arrayChange(inputArray) {
  // initialize moves variable to 0 
  // iterate through array starting at index 1
  // check that the previous is less than current
      // if previous value greater than or equal to current
          // set a variable count = (previousValue + 1) - current
          // add count to current value += count
          // add count to moves
  let moves = 0 
  
  for(let i = 1; i < inputArray.length; i++){
  
      if(inputArray[i - 1] >= inputArray[i]){
          let count = (inputArray[i - 1] + 1) - inputArray[i]
          inputArray[i] += count
          moves += count
      }
      
  }
  
  
  return moves
}
