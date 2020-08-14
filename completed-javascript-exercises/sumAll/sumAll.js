const sumAll = function(firstNum, secNum) {
    if(typeof firstNum != "number" || typeof secNum != "number" || firstNum < 0 || secNum < 0) {
        return 'ERROR'
    }
    if(firstNum === secNum) {
        return firstNum
    }
    sum = 0
    lowerNum = (firstNum < secNum ? firstNum : secNum)
    higherNum = (firstNum < secNum ? secNum : firstNum)
    for(i = lowerNum; i <= higherNum; i++){
        sum += i
    }
    return sum
}

module.exports = sumAll
