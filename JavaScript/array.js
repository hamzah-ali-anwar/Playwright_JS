// Array Practice
var marks = [21, 35, 67, 86, 90, 100]
console.log(marks)

console.log("______________")

marks[3] = 75
console.log(marks)

console.log("______________")

console.log(marks.length)

console.log("______________")

marks.push(200)
console.log(marks)

console.log("______________")

marks.pop()
console.log(marks)

console.log("______________")

marks.unshift(180)
console.log(marks)

console.log("______________")

console.log(marks.indexOf(100))

console.log("______________")

console.log(marks.includes(69))

console.log("______________")

const sumMarks = [32, 42, 43, 45, 65, 78]
for (let i = 0; i <= sumMarks.length; i++)   {
    console.log(i)
}

console.log("______________")

var addArray = [54, 68, 79, 85, 90, 93]
console.log(addArray)

var sum = 0
for (let i = 0; i < addArray.length; i++)  {
    
    sum = sum + addArray[i]
}

console.log(sum)

console.log("______________")

let total = addArray.reduce((sum, mark) => sum + mark, 0)
console.log(total)

console.log("______________")

// Array declared
var scores = [12, 14, 15, 19]

// create new array with even numbers of above declared array
var newScore = []
for (let i = 0; i < scores.length; i++) {

    if (scores[i] % 2 == 0) {
        newScore.push(scores[i])
    }
}

console.log(newScore)

console.log("______________")

// Easy way to handle above script with filter method

let newEvenScore = scores.filter(score=>score % 2 == 0)
console.log(newEvenScore)

console.log("______________")

// Declare an arry then create a new array of even number based off of that array and multiply them all by 2

// Declared initial array
let initialArray = [12, 16, 17, 19, 29, 4, 8, 23]

// Empty array to store the even number
let evenArray = []

// filter method to take out even numbers off of initial array
let evenNumbers = initialArray.filter(evenNum => evenNum % 2 == 0)
console.log(evenNumbers)

let mappedArray = evenNumbers.map(multiplyEvenNumbers => multiplyEvenNumbers * 2)
console.log(mappedArray)

console.log("______________")

// Summing up the values of above mappedArray result

let sumResult = mappedArray.reduce((sum, val) => sum + val, 0)
console.log(sumResult)

console.log("______________")

// Create an arry and perform filter, reduce and map method in same line

let newScore1 = [2, 4, 19, 22, 39, 11]

let allInOne = newScore1.filter(score => score % 2 == 0).map(score => score * 2).reduce((sum, val) => sum + val, 0)
console.log(allInOne)

console.log("______________")

// Sorting for string arrays

let fruits = ["orange", "watermelon", "pineapple", "apple"]
console.log(fruits.sort())
console.log(fruits.reverse())

// Sorting integer arrays
let num = [12, 13, 0.2, 9, 15, 0o3]
num.sort(function(a,b){
    return a-b
})

console.log(num)

// Better way to sort integer arrays
console.log(num.sort((a,b) => a-b))

