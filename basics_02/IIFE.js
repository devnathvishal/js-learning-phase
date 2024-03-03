/*THIS IS AN EXAMPLE OF IMMEDIATE INVOKED FUNCTION EXPRESSION*/
/*This function also known as unnamed iife */
(()=> console.log(`DB CONNECTED`))();

/*THIS CAN ALSO BE WRITTEN LIKE THIS:*/
/*This function is also known as Named IIFE */
 (function iife_Function()
 {
    console.log(`DB CONNECTED AGAIN`);
 })();

 /*How to pass parameter in  unnamed iifee function*/

 ((username)=>console.log(`Hello ${username}, DB Connected succesfully`))('Vishal');

 /**/
