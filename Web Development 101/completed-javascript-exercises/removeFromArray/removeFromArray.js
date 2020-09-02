const removeFromArray = function(args) {
    let argArray = Array.from(arguments);
    let mainArray = argArray[0]
    for(i = 1; i < argArray.length; i++){
        for(j = 0; j < mainArray.length; j++){
            if(mainArray[j] === argArray[i]){
                mainArray.splice(j,1);
            }
        }
    }
    return mainArray
}

module.exports = removeFromArray
