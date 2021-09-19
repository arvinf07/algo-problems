const reversedNum = num => 
parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)


var isPalindrome = function(x) {
    if (Math.sign(x) === -1 || x != reversedNum(x)){
        return false
    }
    return true
};