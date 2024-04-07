let myName = "Vishal   ";
//now we will create a property to return true length to remove space, though we have trim property but we will create our own property
// console.log(myName.trueLength());

String.prototype.truelength = function()
{
    console.log(`true length of ${this} is ${this.trim().length}`);
}

"Hey".truelength();
"Three  ".truelength();

// Here we have created a function for all strings so that any string can access the function to get true length;

myName.truelength();

let myHeroes = ['thor','loki']

let heropower = {
                 'thor' : "hammer",
                 'loki' : "magic",

                 getSpiderPower : function()
                 {
                    console.log(`loki Power is ${this.loki}`);
                 }
                }

// we will add a property to the object so all string, array and function can access. because
// string, array and function goes through the object to check its properties.

Object.prototype.heyVishal = function()
{
    console.log('vishal giving access of this property to all objects');
}

heropower.heyVishal(); // access given to the Object itself
myName.heyVishal(); // access given to string
myHeroes.heyVishal(); // access given to the array

//If we add a property to a specific object , string or array then all objects cant get access to that property

Array.prototype.helloAgain = function()
{
    console.log("Giving access to the arrays only");
}

myHeroes.helloAgain(); //this can access the function because myHeoes is and array
// heropower.helloAgain();//this cant access the function because heropower is a function



//Now we will see prototypal inheritance

const teacher = {
                  'id' : '001',
                  'name': 'A'
                }

const taSupport = {
                   'id' : '011',
                   'isAvailable' : false
                  }   

const user = {
                 'username' : 'abc',
                 'id' : '221',
                 __proto__ : taSupport  // 1 way to access other object
             }     

const userOne = {
                id : 1,
                email : "ssa@gn.com"
} 

const userTwo = {
    id : 2,
    email : "dsa@gn.com"
}

teacher.__proto__ = user; //2 way to access other object
Object.setPrototypeOf(userOne,userTwo); // Modern way to access other object



             
