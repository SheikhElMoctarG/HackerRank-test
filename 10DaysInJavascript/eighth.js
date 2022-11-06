
    const readLine = require("readline");
    const rl = readLine.createInterface(process.stdin, process.stdout);
    (async()=>{
        await rl.question(" ", (res)=> {
            console.log(vowelsAndConsonants(res));
            rl.close();
        }); 
    })();
    function vowelsAndConsonants(s) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let str = s.split('');
        for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i])) {
            console.log(str[i]);
          }
        }
        for (let i = 0; i < str.length; i++) {
          if (!vowels.includes(str[i])) {
            console.log(str[i]);
          }
        }
      }