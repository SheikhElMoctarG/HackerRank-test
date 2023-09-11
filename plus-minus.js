function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positiveCount++;
        } else if (arr[i] < 0){
            negativeCount++;
        } else {
            zeroCount++;
        }
    };
    console.log(parseFloat((positiveCount / arr.length).toFixed(6)));
    console.log(parseFloat((negativeCount / arr.length).toFixed(6)));
    console.log(parseFloat((zeroCount / arr.length).toFixed(6)));
}

plusMinus([-4, 3, -9, 0, 4, 1]);

