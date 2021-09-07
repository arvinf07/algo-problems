function commonCharacterCount(s1, s2) {
  // create a firstString object = {}
  // create count var = 0
  
  // iterate through first string
      // if(firstString[currentValue] === undefined)
          // add to object as with 1 value
      // else
          // firstString[currentValue]++
      // 
  // 
  
  // iterate through second string
      // if currentValue exists in firstStr obj
          // add 1 to counter
          // subtract 1 from firstStr[char]
      // 
  // 
  
  let firstStr = {}
  let count = 0
  
  s1.split('').forEach(char => {
      if(firstStr[char] === undefined){
          firstStr[char] = 1
      } else{
          firstStr[char]++
      }
  })

  s2.split('').forEach(char => {
      if(firstStr[char]){
          count++
          firstStr[char]--
      }
  })
  
  return count
}
