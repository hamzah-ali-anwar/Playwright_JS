/** Create an array called expenses that contains at least 5 different expense amounts.

Calculate the total expenses by summing all the elements of the array.

Find the highest and lowest individual expenses within the array. */

// Array created and summed up all the values
const expenses = [100, 89, 98, 75, 64]
const sumAmount = firstArray.reduce((sum, amount) => sum + amount, 0)
console.log(sumAmount)

// Finding the highest and lowest individual values
const highest = expenses.reduce((max, current) => Math.max(max, current))
const lowest = expenses.reduce((min, current) => Math.min(min, current))
console.log(highest)
console.log(lowest)
