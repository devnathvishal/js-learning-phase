function setusername(username)
{
this.username= username;
console.log(`called ${username}`);
}

function createuser(username,email,password)
{
    setusername.call(this,username); // here this need to be passed in argument while using call function to hold the reference 
    this.email = email;
    this.password = password;
}

const chai = new createuser('chai','ssa@gmail.com','2211');
console.log(chai);