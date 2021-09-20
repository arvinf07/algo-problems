function addBorder(picture) {
  let border = '*'.repeat(picture[0].length + 2)
  let returnArr = [border]

  for(let i = 0; i <= picture.length; i++){
      if(picture[i]){
          returnArr.push(`*${picture[i]}*`)
      } else{
          returnArr.push(border)
      }
  }
  
  return returnArr
}
