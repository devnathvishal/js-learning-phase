const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 6;
// console.log(Math.PI);

const chai = {
    name : "ginger Chai",
    price: "250",
    isAvailable:true,
    orderChai: function()
    {
        console.log("Error 404: Need to put some checks while running loop");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
   
   if(typeof value !== 'function')
   {
    console.log(`${key} : ${value}`);
   }
    
}
