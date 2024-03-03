const myObj = {
         name : "user",
         id   : "001",
         age  : "99",
         WebStagedCourse: "Mycourse"
              }

const {WebStagedCourse: webCourse} = myObj /*This is Known as Object Destructuring, It means that we can rename the key name to write clean code*/

console.log(webCourse);

// console.log(myObj);

const nav = () => {}
console.log(typeof nav);

/*Json structure & API Information*/
/*json is used by javascript to call API's*/
/*
{
  "name": "ram"
  "age" : "24"
  "id"  : 3311210""
}
*/

/* javascripit Execution Context with diagram */
/*https://excalidraw.com/#json=Mf4_Wsntm-ONRymFKoWit,xZOm7xR1pwE-h90euEvdbQ*/