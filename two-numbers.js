var addTwoNumbers = function(l1, l2) {
    l1 = l1.reverse();
    l2 = l2.reverse();
    var firstNumber = '';
    var secondNumber = '';
    for (let i = 0; i < l1.length; i++) {
        firstNumber += l1[i];
    }
    for (let j = 0; j < l2.length; j++) {
        secondNumber += l2[j];
    }
    let total = (parseInt(firstNumber) + parseInt(secondNumber)).toString();

    var totalAsArray = [];
    for (let l = 0; l < total.length; l++) {
        totalAsArray.push(parseInt(total[l]))
    }
    return totalAsArray.reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
