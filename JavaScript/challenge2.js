
/**Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array. */

// Array created and a new record added in the beginnning
const studentNames = ['John', 'Wick', 'Tommy', 'Shelby']
studentNames.unshift('Night Walker')
console.log(studentNames)

// Last student name removed from an array
studentNames.pop()
console.log(studentNames)

// Sorting student names in an array
studentNames.sort()
console.log(studentNames)