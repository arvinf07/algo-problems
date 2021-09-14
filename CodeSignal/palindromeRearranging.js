function palindromeRearranging(inputString) {
  let stringObj = {}
  
  for(let i = 0; i < inputString.length; i++){
      if(stringObj[inputString[i]]){
          stringObj[inputString[i]]++
      } else{
          stringObj[inputString[i]] = 1
      }
  }
  
  let keys = Object.keys(stringObj)
  let odds = 0 
  
  for(let i = 0; i < keys.length; i++){
      if(stringObj[keys[i]] % 2 !== 0) {
          odds++ 
      } 
      
      if(odds > 1) return false
  }
  
  return true
}