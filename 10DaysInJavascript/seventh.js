const readLine = require("readline");
const rl = readLine.createInterface(process.stdin, process.stdout);
(async()=>{
    await rl.question(" ", (res)=> {
        console.log(getLetter(res.charAt(0)));
        rl.close();
    }); 
})();
function getLetter(s) {
    let letter;
    var a = ["a", "e", "i", "o", "u"];
    var b = ["b", "c", "d", "f", "g"];
    var c = ["h", "j", "k", "l", "m"];
    var d = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    switch(s){
        case searchB(s, a):
            letter = searchInArray(a, "A", s);
            break;
        case searchB(s, b):
            letter = searchInArray(b, "B", s);
            break;
        case searchB(s, c):
            letter = searchInArray(c, "C", s);
            break;
        case searchB(s, d):
            letter = searchInArray(d, "D", s);
            break;     
    }
    return letter;
}
// function to check in the array
function searchInArray(array, chara, orChar){
    for(const element of array){
        if(element == orChar)
            return chara;
    }
}
// for search in array if it has the character
function searchB(s, array){
    for(const element of array){
        if(element == s)
            return element;
    }
    return "not found"
}