var isPalindrome = function(x) {
    return x == intToComplete(x.toString());
};

function intToComplete(str){
    var myarr = []
    for (let i = 0; i < str.length; i++) {
        myarr.push(str[i])
    }
    myarr.reverse()
    return arrayToInt(myarr);
};

function arrayToInt(arr){
    var mystr = '';
    for (let k = 0; k < arr.length; k++) {
        mystr += arr[k];
    };
    return parseInt(mystr);
};