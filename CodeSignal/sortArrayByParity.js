
var sortArrayByParity = function(nums) {
  // 91 ms
  if(nums.length === 1) return nums

  let j = nums.length - 1
  let i = 0
  
  while(i < j){
      if(nums[i] % 2 === 0){
          i++
      } else{
          [nums[i], nums[j]] = [nums[j], nums[i]]
          j--
      }
  }
  
  return nums
};


// var sortArrayByParity = function(nums) {
//   // 194 ms
//   let odds = []
//   let evens = []
  
//   for(let i = 0; i < nums.length; i++){
//       if(nums[i] % 2 === 0){
//           evens.push(nums[i])
//       }else{
//           odds.push(nums[i])    
//       }
//   }
  
//   return evens.concat(odds)
// };