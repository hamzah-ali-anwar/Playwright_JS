
let sumOfIntegers = function(a,b)   {

    return a + b
}
console.log(sumOfIntegers(3, 7))

console.log('______________')

let sumOfNumbers = (c,d) => c + d
    console.log(sumOfNumbers(5, 10))

console.log('______________')

let day = 'tuesday'
console.log(day.length)

console.log('______________')

let subDay = day.slice(0,3)
console.log(subDay)
console.log(day[1])

console.log('______________')

let splitDay = day.split('s')
console.log(splitDay)
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

console.log('______________')

let date = '23'
let nextDate = '27'
let diff = parseInt(date) - parseInt(nextDate)
console.log(diff)

console.log('______________')

let newQuote = day+ 'is Funday'
console.log(newQuote)

let val = newQuote.indexOf('day', 5)
console.log(val)

console.log('______________')

let count = 0
let value1 = newQuote.indexOf('day')
while (value1 !== -1)   {
    count++
    value1 = newQuote.indexOf('day', value1+1)
}
console.log(value1)

console.log('______________')

