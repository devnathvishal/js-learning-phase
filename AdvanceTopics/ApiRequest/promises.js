const promises = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Async is Completed");
        resolve()
    },1000)
    

}
)

promises.then(function()
{
    console.log("Promise Consumed")
})


//Another way to do above task

new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log("Async two is done");
        resolve();
    },1000)
}).then(function(){
    console.log("promise two is consumed")
})


//in this promise we r getting data through resolve

const promiseThree = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve({
            'Name' : "userOne",
            'Email' : "userone@example.com"
        })
    },1000)
})

promiseThree.then(function(user)
{
    console.log(user);
})

//Another example of promise to understand catch and to fetch specific data from the object


promiseFour = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        let error = true;
        if(!error)
        {
            resolve({
                'accountId' : "1221",
                'accountType': "Savings"
            })
        }
        else
        {
            reject('Error: Something Went Wrong')
        }
    },1000)
})


promiseFour
    .then((data)=>
    {
        console.log(data);
        return data.accountId
    })
    .then((accId)=>
        {
            console.log(`Account id : ${accId}`);
        })
    .catch((err)=>{
            console.log(err);
        }).finally(()=>
        {
            console.log("The promise is either resoved or rejected");
        })


        const promiseFive = new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                let error = false;
                if(!error)
                {
                    resolve({
                        'accountId' : "newId",
                        'accountType': "javascript"
                    })
                }
                else
                {
                    reject('Error: JS Went Wrong')
                }
            },1000)
        })

           // here we have used async like we have used then and catch. it is another way to consume promises
        async function consumePromiseFive()
        {
           try {
            const response = await promiseFive
            console.log(response);
           } catch (error) {
               console.log(error);
           }
        }

        consumePromiseFive()