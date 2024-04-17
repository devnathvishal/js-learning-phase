//Object based use of getter setter

const User = {
    _email : "vd@chai.com",
    _password : "get123",

    get email()
    {
        return this._email.toUpperCase();
    },

    set email(value)
    {
        this._email=value;
    },

    get password()
    {
        return this._password.toUpperCase();
    },

    set password(value)
    {
        this._password=value;
    }
}

const chai = Object.create(User);
console.log(chai.email);
console.log(chai.password);