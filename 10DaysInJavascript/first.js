const readLine = require("readline");
const rl = readLine.createInterface(process.stdin, process.stdout);
(async()=>{
    await rl.question("enter text: ", (res)=> {
        greeting(res);
    }); 
})();
function greeting(p) {
    console.log("Hello, World!");
    console.log(p);
}