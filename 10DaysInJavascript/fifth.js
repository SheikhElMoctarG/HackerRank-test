const readLine = require("readline");
const rl = readLine.createInterface(process.stdin, process.stdout);
(async()=>{
    await rl.question(" ", (res)=> {
        console.log((Math.PI * (res*res)));
        console.log(2 * (Math.PI * res));
        rl.close();
    }); 
})();