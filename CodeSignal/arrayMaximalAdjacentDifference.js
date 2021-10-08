function arrayMaximalAdjacentDifference(inputArray) {
  let differenceVar = 0
  
  for(let i = 0; i < inputArray.length; i++){
      let prevDiff = inputArray[i] - inputArray[i - 1]
      let nextDiff = inputArray[i] - inputArray[i + 1]
      
      if(differenceVar < prevDiff) differenceVar = prevDiff
      
      if(differenceVar < nextDiff) differenceVar = nextDiff
      
  }
  
  return differenceVar

}
