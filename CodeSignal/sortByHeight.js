function sortByHeight(a) {
  // iterate through array and save all idx which === -1 in an arr
  // sort the array
  // delete trees from beginning
  //move the negative ones to their old place
  let treeIdx = []
  
  a.forEach( (person, idx) => {
      if(person === -1) treeIdx.push(idx)
  })
  
  a.sort((a, b) => a - b)
  
  if(treeIdx.length === 0){
      return a
  } else {
      a.splice(0, treeIdx.length)
      treeIdx.forEach(idx => {
          a.splice(idx, 0, -1)
      })
      return a
  }  
}