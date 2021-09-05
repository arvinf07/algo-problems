function almostIncreasingSequence(sequence) {
  if(sequence.length === 2) return true

  // iterate through array
      // if invalid === 2 return false
      //  set invalid var 0
      
      //  if currentValue >= nextValue
          // add 1 to invalidVar
      //   
      // sequence.length != (i + 1) &&
      // sequence[i] < sequence[i-1] || 
  //  
  let violations = 0
  
  for(let i = 0; i < sequence.length; i++){
     
      if( sequence[i] <= sequence[i-1] || sequence[i] >= sequence[i+1] ){
          
          sequence.splice(i, 1)
          console.log(sequence)
          console.log('violated at: ' + i)
          violations++
          i--
      }
      
  }
  if(violations >= 2) return false
  return true
      
   

}
