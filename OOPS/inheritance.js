class User
{
    constructor(username) //constructor keyword works to initialize the object whenever a new keyword will be used
    {
        this.username = username;
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User
{
    constructor(username,email,password)
    {
        super(username)
        this.email= email;
        this.password = password;
    }

    addCourse()
    {
       console.log( ` A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")

chai.addCourse();

const msChai = new User("KB");

msChai.logMe();
chai.logMe();

console.log(chai == msChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
