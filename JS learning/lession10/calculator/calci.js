const display=document.querySelector('.js-displey');
        
function displayCalculation(){
    
    if(calculation=='') {
        display.textContent='0';
        console.log('empty');
    }
    else display.textContent=calculation;
}

let calculation=localStorage.getItem('calculation') || '';
displayCalculation();
function updateCalci(value){
    calculation+=value;
    localStorage.setItem('calculation',(calculation));
    console.log(calculation);
    displayCalculation();
};