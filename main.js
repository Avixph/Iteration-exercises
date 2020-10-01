//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numString = num.map(function (num) {
  return num.toString();
});
console.log(numString);
/*function numToString(num) {
  let numString = num.map(string)
  return numString;
}
console.log(numToString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));*/

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled
function doubled(arr) {
  let newArray = [];
  arr.forEach((element) => newArray.push(element * 2));
  return newArray;
}
console.log(doubled([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach should be used here
/*function firstAndLast(char) {}
console.log(firstAndLast(["winning", "tomato"]));*/
function firstAndLast(arr) {
  let newArray = [];
  arr.forEach((element) => {
    newArray.push(element.charAt(0) + element.charAt(element.length - 1));
  });
  return newArray;
}
console.log(firstAndLast(["hello", "sam", "how"]));
console.log(firstAndLast(["winning", "tomato"]));

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
let arr = [];
for (i = 1; i <= 4; i++) {
  arr.push(`${i} ${i} ${i}`);
}
console.log(arr.join(" "));
