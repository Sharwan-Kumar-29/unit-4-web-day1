function combiningArrays(arr1, arr2) {
  let groceries = [...arr1, ...arr2];
  return groceries;
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
