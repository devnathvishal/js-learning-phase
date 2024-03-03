// const myApp = new Object();  /*This is know as SingleTon Objects*/
// console.log(myApp);

// const secondApp = {} /*This is a non singleton object*/
// console.log(secondApp);

const newUser = {}
newUser.name = "Vishal"
newUser.id = "55414"
newUser.fnc =  function myFunc(){ console.log("Function here");}

// console.log(newUser);

const regularUser = {
                     email : "heyuser@blinkit.com",
                     fullname :  {
                                  name : "Ankit",
                                  Age : "21",
                                  id : {
                                       appId : "22112",
                                       userId : "008818"
                                  },
                                  products : ['Veggies','candles','spices','chocolates']
                     }
}

// console.log(regularUser.fullname);

const obj1 = {a:"00", b:"01", c:"02", d:"04"}
const obj2 = {e:"11", f:"12", g:"13", h:"15"}
const obj3 = {m:"21", n:"22", o:"23", p:"24"}

// const obj4 = Object.assign({}, obj1, obj2, obj3); /*Thats how we can assign two or more objects in a single object */

// console.log(obj4);

/* We can do the same thing  with the help of spread operator */

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

console.log(newUser);
console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));


console.log(newUser.hasOwnProperty('id')); /*This function  is used to check wether the property is available or not */