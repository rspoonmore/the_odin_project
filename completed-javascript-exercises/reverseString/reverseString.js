const reverseString = function(string) {
    if(string === '') {return ''};
    stringArray = string.split('');
    newStr = "";
    for(i=0; i<stringArray.length; i++) {
        newStr += stringArray[stringArray.length - (i + 1)];
    };
    return newStr;
}

module.exports = reverseString
