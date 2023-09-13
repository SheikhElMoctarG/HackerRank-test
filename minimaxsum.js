function miniMaxSum(arr) {
    var totalMin =0;
    var totalMax= 0;
    let allTotals = [];
    for(let i=0; i<arr.length; i++){
        allTotals.push(startSuming(i, arr));
    }
    allTotals.sort();
    console.log(`${allTotals[0]} ${allTotals[4]}`);
}

function startSuming(num, arr){
    var total = 0;
    for (let j = 0; j < arr.length; j++) {
        if (num == j) {
            continue;
        } else {
            total += arr[j]
        }
    }
    return total;
}