function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if(yourRight === friendsRight){
      if(yourLeft === friendsLeft) return true
  }
  
  if(yourRight === friendsLeft){
      if(yourLeft === friendsRight) return true
  }
  
  return false
}
