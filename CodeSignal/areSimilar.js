function areSimilar(a, b) {
  let swap = 0
  let obj = {}
          
  for(let i = 0; i < a.length; i++){
      if(obj[a[i]]){
          obj[a[i]]++ 
      } else{
          obj[a[i]] = 1
      }
  }
  
  for(let i = 0; i < b.length; i++){
      if(obj[b[i]]){
          obj[b[i]]--
          (a[i] === b[i]) ? null : swap++
      } else {
          return false
      }
  }

  return swap < 3
}
