var plusOne = function(digits) {
    var value = intgersToString(digits);
    return intgersToArray(value);
};

function intgersToString(intgers){
    var str = "";
    for (let i = 0; i < intgers.length; i++) {
        str += intgers[i];
    }
    return BigInt(str) + 1n;
}

function intgersToArray(intgersBeforeArray ){
    var str = intgersBeforeArray.toString();
    let arr =[];
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
    }
    return arr;
}



console.log(plusOne([9,9]))
