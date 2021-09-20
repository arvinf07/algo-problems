function alternatingSums(a) {
    
  let returnArr = [0, 0]

  for(let i = 0; i  < a.length; i++){
      if(i === 0 || i%2 === 0){
          returnArr[0] += a[i]
      } else{
          returnArr[1] += a[i]
      }
      
  }
  
  return returnArr
}
