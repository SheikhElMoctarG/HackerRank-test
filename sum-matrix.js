function diagonalDifference(arr) {
    // Write your code here
    var left = 0;
    var right = 0;
    for(var i=0; i<arr.length; i++){
        left += arr[i][i];
        right += arr[i][(arr.length - 1) - i];
    }
    return Math.abs(left - right);
}

diagonalDifference([[11,2,4], [4, 5, 6], [10, 8, -12]]);