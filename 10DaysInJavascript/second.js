function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);
    
}
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (secondInt) => {
    rl.setPrompt("");
    rl.prompt();
    rl.on("line", (secondDecimal)=> {
        rl.setPrompt("");
        rl.prompt();
        rl.on("line", (secondString)=> {
            performOperation(secondInt, secondDecimal, secondString);
            rl.close();
        });
    });
});