function user(username,loginCount,isLoggedin)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    return this;   //this line is option, because function will return the values be default
}

const userOne = new user("Vishal",5,true);
const userTwo = new user("Chai",2,false);

//here new keyword is used to create instance of and function so different values can be passed without overriding the previous values

console.log(userOne);
console.log(userTwo);