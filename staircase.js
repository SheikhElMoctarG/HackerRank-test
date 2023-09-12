function staircase(n) {
    // Write your code here
    for(let i=0; i<n; i++){
        var content = "";
        for(let j=1; j<n -i; j++){
            content += " ";
        }
        for(let d=0; d<i+1; d++){
            content += "#";
        }
        console.log(content);
    }
}