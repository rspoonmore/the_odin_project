const repeatString = function(string, numTimes) {
    if(numTimes < 0){
        return "ERROR"
    }
    if(numTimes === 0){
        return ""
    }
    result = ""
    for(i = 0; i < numTimes; i++) {
        result += string
    }
    return result
}

module.exports = repeatString
