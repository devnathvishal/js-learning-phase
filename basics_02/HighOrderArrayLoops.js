
/*For of Loop*/ 

const twoArray = ['A','B','C','D']

for (const num of twoArray) {
    // console.log(twoArray.indexOf(num));  
    // console.log(num);
}

const str = "Hello Planet"

for (const ky of str) {
    // console.log(ky)
}


//Maps

const map = new Map();

map.set('IN', "India")
map.set('US', "United States")
map.set('FR',"France")

// console.log(map);

for (const [ky,vl] of map) {      // Here [ , ] This is syntax of using the key and values of the map
    // console.log(ky, ':-',vl);
}


/*For In loop*/


const myObj = {
     'game1' : 'NFS',
     'game2' : 'GTA'
}

for (const key in myObj) {
    // console.log(`${key} for ${myObj[key]}`);
}

const myArray = ['A','B','C','D']

for (const key in myArray) {
    // console.log(key);
//    console.log(`${key} contains ${myArray[key]}`);
}


/*Foreach Loop*/

const gArray = ['A','B','C','D','E','F']

// Type 1
// gArray.forEach(function(val)
// {
// console.log(val);
// }
// )

// Type 2

// gArray.forEach((val)=> {
//     console.log(val);
// })

// Type 3
// function printMe(val) {
//     console.log(val);
// }
// gArray.forEach(printMe)

// Type 4

// gArray.forEach((val1,val2,val3)=>{console.log(val1,val2,val3);})

const langName = [
    {
        'languageName' : 'Java',
        'fileName' : 'exe'
    },

    {
        'languageName' : 'Javascript',
        'fileName' : 'js'
    }

]

langName.forEach((item)=>{
    console.log(item.fileName);

    console.log(item.languageName);
})