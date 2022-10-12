const { parse } = require("path");
const readline = require("readline");
function main() {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("", (width)=> {
        rl.setPrompt("");
        rl.prompt();
        rl.on("line", (height)=> {
            console.log(calArea(width, height));
            console.log(calPeri(width, height));
            rl.close();
        })
    })
}
main();
function calArea(width, length){
    return width * length;
}
function calPeri(width, length){
    return (parseFloat(width) + parseFloat(length)) * 2;
}