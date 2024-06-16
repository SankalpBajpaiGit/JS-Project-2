const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid height ${weight}`;
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // Under Weight = Less than 18.6 Normal Range = 18.6 and 24.9 Overweight = Greater than 24.9
        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi} :  Under Weight </span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi} : Normal Weight </span>`;
        }
        else if(bmi > 24.9){
            results.innerHTML = `<span>${bmi} : Overweight </span>`;
        }
    }
});
