/* Singleton objects are the bjects which are made through constructors*/

const mySym = Symbol("key 1");

const myUser = 
{
    "Full Name" : "Vishal",
    "Age"  : "97",
    "Id"   : "778778",
    [mySym]: "Key One",
    "email": "vishalonline@helix.com"
}

// console.log(typeof myUser[mySym]);

// console.log(myUser);

// Object.freeze(myUser);

myUser.email = "vishalonline.myanime.com";

/* Whenever a  two or more than two word varaiable is declared in double quotes, we cant access it through '.'. We must use '[" "]' to acccess that variable */
console.log(myUser["Full Name"]);


myUser.greeting = function() 
              {
                console.log("Hello Function");
              }

              console.log(myUser.greeting());

myUser.greetingTwo = function()
                    {
                        console.log(`Hey Second Function Mr. ${myUser["Full Name"]}`);
                    }              

                    console.log(myUser.greetingTwo());