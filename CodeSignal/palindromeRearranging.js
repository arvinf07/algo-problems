function palindromeRearranging(inputString) {
  if(inputString.length < 3) return true
  
  let stringObj = {}
  
  for(let i = 0; i < inputString.length; i++){
      if(stringObj[inputString[i]]){
          stringObj[inputString[i]]++
      } else{
          stringObj[inputString[i]] = 1
      }
  }
  console.log(stringObj)
  
  let keys = Object.keys(stringObj)
  let singleLetters = 0 
  
  for(let i = 0; i < keys.length; i++){
      if(stringObj[keys[i]] === 1) {
          singleLetters++ 
      }
      
      if(stringObj[keys[i]] !== 1 && stringObj[keys[i]]%2 !== 0 || singleLetters > 1) return false
      

  }
  
  return true
}
