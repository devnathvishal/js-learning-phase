//old way to use getter setter Or Function based Syntax

function user(email,password)
{
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get:function()
        {
            return this._email.toUpperCase()
        },
        set : function(value)
        {
            this._email = value
        }
    })
    

    Object.defineProperty(this,'password',{
        get:function()
        {
            return `${this._password.toUpperCase()}y67aa`
        },
        set : function(value)
        {
            this._password = value
        }
    })
}

const chai = new user("cha@chai.com","ebay123");
console.log(chai.email);
console.log(chai.password);