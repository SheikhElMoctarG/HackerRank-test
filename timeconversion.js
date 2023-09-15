function timeConversion(s) 
{
    let indexes = getIndexes(s, ":");
    if (s.includes("PM") && s.slice(0, indexes[0]) < 12) {
        return ourFormat(s,(parseInt(s.slice(0, indexes[0])) +12).toString(), indexes[0], getIndexes(s, "P"))
    } else if(s.includes("PM") &&  s.slice(0, indexes[0]) ==12){
        return ourFormat(s,((parseInt(s.slice(0, indexes[0])))).toString(), indexes[0], getIndexes(s, "P"))
    } else if(s.includes("AM") &&  s.slice(0, indexes[0]) ==12){
        return ourFormat(s,(parseInt(s.slice(0, indexes[0])) - 12).toString() + 0, indexes[0], getIndexes(s, "A"))
    } else {
        return ourFormat(s,0+(parseInt(s.slice(0, indexes[0]))).toString(), indexes[0], getIndexes(s, "A"))
    }
}

function getIndexes(str, target){
    let indexes = []
    for(let i =0; i<str.length; i++){
        if(str[i] === target){
            indexes.push(i)
        }
    }
    return indexes;
}

function ourFormat(realStr, timeClock, indexOfH, indexOfF){
    var real = timeClock + realStr.slice(0,indexOfF).slice(indexOfH);
    return real;
}
console.log(timeConversion("06:40:03AM"))
