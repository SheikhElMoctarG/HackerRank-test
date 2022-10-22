function factorial(s){
    var total = 1; 
    for (let i = s; i >= 0; i--) {
        if (i-1 != 0 && i != 0) {
            total *= i;
        }
    }
    return total;
}
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (number)=> {
    console.log(factorial(number));
    rl.close();
});

