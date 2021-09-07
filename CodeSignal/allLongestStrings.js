function allLongestStrings(inputArray) {
  let longestStr = 0
  
  inputArray.forEach((str) => {
      if(str.length > longestStr) longestStr = str.length
  })
  return inputArray.filter((str) => str.length === longestStr)
}
