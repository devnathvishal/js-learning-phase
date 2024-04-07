function multiplyBy5(num)
{
    return num*5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//function can also refer to a object 


function newUser(username,price)
{
this.price = price;
this.username = username;
}


newUser.prototype.sepcifications = function()
{
   console.log(this.price++); 
}   

newUser.prototype.printMe = function()
{
    console.log(`price is ${this.price}`);
}

const inputOne = new newUser('a',10);
// new keyword creates an object which needs a reference, here reference is the function newuser()
const inputTwo = new newUser('b',20);

inputOne.printMe();
inputTwo.sepcifications();