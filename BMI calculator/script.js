const form = document.querySelector('form')

form.addEventListener('submit', function(e)
{
e.preventDefault();  // To prevent default submit action of form

const height = document.querySelector('#height').value
const weight = document.querySelector('#weight').value
const result = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height))
{
    result.innerHTML = `Please give a valid height ${height}`
}
else if(weight === '' || weight < 0 || isNaN(weight))
{
    result.innerHTML = `Please give a valid weight ${weight}` 
}
else
{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    
    
    if(bmi<=18.9)
    {
    result.innerHTML = `<span>${bmi} "You are under weight"</span>`
    }
    else if(bmi>=18.9 && bmi<=24.9)
    {
        result.innerHTML = `<span>${bmi} "You are Normal"</span>`
    }
    else if(bmi>24.9)
    {
        result.innerHTML = `${bmi} You are Overweight`
    }
   
}
})



