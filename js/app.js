
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 7){
        return pin;
    }
    else{
        console.log('Pin not found please try again', pin)
        
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
    const displayPinField = document.getElementById('display-pin'); 
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
 
   const typedNumberFilled = document.getElementById('typed-numbers');
   if(isNaN(number)){
   if(number === 'C'){
    typedNumberFilled.value = '';
   }
 
   else if (number === '<'){
    const digits = typedNumberFilled.value.split('');
    digits.pop();
    const remainingDigits = digits.join('');
    typedNumberFilled.value = remainingDigits;
   }


   }
   else{
    
    const previousTypedNumber = typedNumberFilled.value;
    const newTypedNumber = previousTypedNumber + number;
    typedNumberFilled.value = newTypedNumber;
   }

})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberFilled.value;
    if (typedNumber === currentPin){
        console.log('correct Pin')
    }
    else{
        console.log('incorrect pin')
    }
})