function handleKeyDown(event){
    if(event.key==='Enter'){
    calculateTotal();
   }
}

function calculateTotal(){
     // String(4) converting 4 as string '4'
    // Number('4') converting '4' as number 4
    //console.log('25'-5) ==> 20 but '25'+5 ==>'255'  therefore always do calculation in numbers.

    const inputElement=document.querySelector('.js-cost-input');
    let cost= Number(inputElement.value);
    if(cost<40&& cost>0){
        //solved exercise 9a.
        cost*=100;
        cost+=1000;

        cost/=100;
    }
    
    document.querySelector('.js-total-cost')
        .innerHTML=`Total cost: $${cost}`;
}

function follow(){
    const fButton = document.querySelector('.follow-button');
    //using innerHTML property to change the text is not good practice becz if <button>  Follow</button> is like this having spaces or new lines arount the text 'Follow' it will conside them as well as a innerHTML and our if condition always false therefore use innerText property 
    if(fButton.innerText==='Follow'){
        fButton.innerHTML='Following';
        // class creating styling when press button 
        fButton.classList.add('is-following');
    }
    else{
        fButton.innerHTML='Follow';
        fButton.classList.remove('is-following');
    }
   
}