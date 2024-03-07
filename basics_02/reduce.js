const myArray = [1,2,3]

// const total  = myArray.reduce(function (acc, curval)
// {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

// console.log(total);

// Lets doo same thimg with the help of arrow function

const myTotal = myArray.reduce((accValue,currValue)=> accValue + currValue, 3)

// console.log(myTotal);

const Courses =  [
      {
        'courseName' : "JS",
        'coursePrice': 250
      },

      {
        'courseName' : "React",
        'coursePrice': 750
      },

      {
        'courseName' : "Node",
        'coursePrice': 200
      }
]


const courseTotal = Courses.reduce((accPrice,item)=>accPrice + item.coursePrice, 0)

console.log(courseTotal);