function alternatingSums(a) {
    
  let returnArr = []
  let total = 0

  for(let i = 0; i  < a.length; i +=2 ){
      total += a[i]
  }
  returnArr.push(total)
  
  total = 0
  
  for(let i = 1; i  < a.length; i +=2 ){
      total += a[i]
  }
  returnArr.push(total)

  
  return returnArr
}