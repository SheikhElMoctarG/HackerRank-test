function birthdayCakeCandles(candles) {
    // Write your code here
    return getTimes(candles, getBigerInt(candles));
};

function getBigerInt(c){
    var array = c.sort((a,b)=> a-b);
    return array[array.length - 1];
};

function getTimes(array, num) {
    var times = 0;
    array.forEach(element => {
      if (element == num) {
        times++;
      }
    });
    return times;
  }
  
let myarr = [4,4,2,3, 20]
for (let i = 0; i < 100000; i++) {
  myarr.push(1000);
}
console.log(myarr)
console.log(getBigerInt(myarr));
console.log(birthdayCakeCandles(myarr));