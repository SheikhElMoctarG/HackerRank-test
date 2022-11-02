function getGrade(score) {
    let grade;
    let statement = [
        {
            min: 25, 
            max: 30, 
            result: "A"
        },{
            min: 20, 
            max: 25, 
            result: "B"
        },{
            min: 15, 
            max: 20, 
            result: "C"
        },{
            min: 10, 
            max: 15, 
            result: "D"
        },{
            min: 5, 
            max: 10, 
            result: "E"
        },{
            min: 0, 
            max: 5, 
            result: "F"
        }
    ];
    for(const value of statement){
        if(score > value.min && score <= value.max)
            grade = value.result
    }
    return grade;
}
const readLine = require("readline");
const rl = readLine.createInterface(process.stdin, process.stdout);
(async()=>{
    await rl.question(" ", (res)=> {
        console.log(getGrade(res));
        rl.close();
    }); 
})();