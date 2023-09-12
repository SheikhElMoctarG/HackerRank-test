const list= [
    {litter: 'I', number: 1},
    {litter: 'V', number: 5},
    {litter: 'X', number: 10},
    {litter: 'L', number: 50},
    {litter: 'C', number: 100},
    {litter: 'D', number: 500},
    {litter: 'M', number: 1000},
    {litter: 'IV', number: 4},
    {litter: 'IX', number: 9},
    {litter: 'XL', number: 40},
    {litter: 'XC', number: 90},
    {litter: 'CD', number: 400},
    {litter: 'CM', number: 900}
];
var romanToInt = function(s) {
    var totalOfString = 0;
    const litters= ['I', 'X','C'];
    const nextL = ["V", "X", "L", "C", "D", "M"]
   for (let i = 0; i < s.length; i++) {
        if(list.find((x) => x.litter == s[i] + s[i+1]) != undefined){
            totalOfString += getNumber(s[i]+s[i+1]);
            i++;
       } else {
        totalOfString += getNumber(s[i]);
       }
   }
   return totalOfString;
};

function getNumber(character){
    try {
        return list.find((x)=> x.litter == character).number
    } catch (error) {
        return 0;
    }
   
}

console.log(romanToInt("MCMXCIV"))
