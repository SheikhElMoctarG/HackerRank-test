function func() {
	let arr = ["sheikh", "ahmed", "filter", "pop", "sheikh"];

	// Removing the specified element by value from the array
	for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "sheikh") {
          arr.splice(i, 1); // Remove the element at index i
        }
      }
  console.log("Remaining elements: " + arr);
}
// func();

// let array = [1, 3, 7, 4, 5, 7, 6];
// const valueToRemove = 3;

// for (let i = array.length - 1; i >= 0; i--) {
//   if (array[i] === valueToRemove) {
//     array.splice(i, 1); // Remove the element at index i
//   }
// }

// console.log(array); // [1, 2, 4, 5, 6]

var removeElement = function(nums, val) {
  var counter = 0;
  for (let i =0; i<nums.length; i++) {
      if (nums[i] == val) {
        nums[counter++] = nums[i]// Remove the element at index i
      }
    }
  return counter;
};

console.log(removeElement([3,2,2,2,3], 3));
console.log(removeElement2([3,2,2,2,3], 3));

function removeElement2(nums, val) {
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
      // If the element is not val
      if (nums[i] !== val) {
          nums[count++] = nums[i];
      }
  }
  return count;
}