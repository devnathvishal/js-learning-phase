newArray = [1,2,3,4,5,6,7,8,9,10]

const myArray = newArray.map((num)=> {
    return num +10
})
//map allows to perform a function for every array element
// console.log(myArray);
// console.log(newArray);   Map doesnt modify original array


// Lets See an example of chaining
//Chaining is using multiple functions

const oneArray = [1,2,3,4,5,6,7,8,9,10]

let secArray = oneArray.map((num)=> num+1)
                       .map((num)=> num*10)
                       .filter((num)=>num>40)

    console.log(secArray);

