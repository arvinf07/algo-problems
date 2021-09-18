var twoSum = function(nums, target) {
  let mapObj = {}
  let answer
  nums.forEach((num, idx) => {
      mapObj[num] = idx
  })
  nums.forEach((num, idx) => {
      let complement = target - num
      if (complement in mapObj && mapObj[complement] != idx){
          answer = [mapObj[complement], idx]
      }
  })
  return answer
};