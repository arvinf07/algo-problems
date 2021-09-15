function isLucky(n) {
    
  // find the number where it turns into the other half
      // from the beginning to the length divided by 2 minus one
  // 
  // create two vars: sum1 and sum 2
  // iterate through array
      // if i less than number halfpoint
          // increase sum1 by current value
      // eles
          // incrase sum2 by current value
  // 
  
  let [sum1, sum2] = [0,0]
  let numArr = n.toString().split('')
  let halfpoint = (numArr.length/2) - 1
  
  numArr.forEach((num, idx) => {
      if(idx <= halfpoint){
          sum1 += parseFloat(num)            
      } else{
          sum2 += parseFloat(num)
      }
  })

  return sum1 === sum2
}
