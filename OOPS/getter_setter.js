class user
{
    constructor(email,password)
    {
        this.email = email;
        this.password = password;
    }

    get password()    //getter setter is used to modify the value  which we doesnt want to return as usually a code returns a value
    {
        // return this._password.toUpperCase() // .password is written as ._password , because it is showing error because same
                                            // variable is getting used while using getter setter

             return `${this._password}HeyYou` //another way to modify the value
                                        }                                      

    set password(value)
    {
             this._password = value
    }
}

const vishal = new user("email@vishal.ai","acd");
console.log(vishal.password); 

//Another way to use getter setter in old way is in file properties_get_set.js