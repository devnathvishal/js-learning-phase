const coding = ['js','java','python','cpp']

const print = coding.forEach((item)=>
{
        // console.log(item);
        return item; //For Each method returns undefined
})

console.log(print);


const numArray = [1.2,3,5,15,30,22,34]

const val = numArray.filter((item)=>item>10)
//Filter is used to create a new array which checks condition for every array element
console.log(val);

// Doing above work by ForEach loop

const newArray = []

numArray.forEach((num)=>
{
        if(num>5)
        {
                newArray.push(num)
                // console.log(num); //It will print values of the array
                // return num  this return will not work because Foreach returns undefined meanss nothing
        }
})

console.log(newArray);





const books = [
        {'titleName': 'Lost', 'Published':'1920','genre':'Fiction'},
        {'titleName': '1947', 'Published':'1919','genre':'History'},
        {'titleName': 'Road', 'Published':'2002','genre':'Fiction'},
        {'titleName': 'Crime', 'Published':'1900','genre':'Thriller'},
        {'titleName': 'Again', 'Published':'2002','genre':'Comedy'}
]

// const user = books.filter((item)=>{
//  item.genre==='Fiction'}) 
 /*This will print empty array because if we use curly braces after function delaration we need to 
 write return keyword like below or we can write the condition code or log on the same line after function declaration*/
const user = books.filter((item)=>{
return item.genre==='Fiction'})
// console.log(user);

