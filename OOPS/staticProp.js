class user
{
    constructor(username)
    {
        this.username = username
    }
    logMe()
    {
        console.log(`this is ${this.username}`);
    }

    static createId()
    {
        return `123`;
    }
}

class Teacher extends user
{
    constructor(username,email)
    {
        super(username)
        this.email = email;
    }
}


const chai = new user("chai");
chai.logMe();
// chai.createId(); //not accesible because of static method

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
// iphone.createId();  //not accesible because of static method