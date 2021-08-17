function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const newInputValue=parseFloat( inputValue.value);
    inputValue.value= '';
    return newInputValue;
   
}

// get total input field value ///////
function getTotalInputValue(depositValue, value){
    const totalInputValue = document.getElementById(value);
    const previousInputValue = parseFloat(totalInputValue.innerText);
    const newTotalValue = previousInputValue + depositValue;
    totalInputValue.innerText = newTotalValue;
}

// get current balance //////
function getCurrentBalance (){
    const updateBalance = document.getElementById('total-balance');
    const previouTotalBalance= parseFloat(updateBalance.innerText);
    return previouTotalBalance;
}


// get update balance ///////////
function getUpdateBalance (totalBalance, isAdd){
    const updateBalance = document.getElementById('total-balance');
    const previouTotalBalance= getCurrentBalance();
  if(isAdd==true){
    const totalUpdateBalance = previouTotalBalance +totalBalance;
    updateBalance.innerText =totalUpdateBalance;
  }
  else{
    const totalUpdateBalance = previouTotalBalance -totalBalance;
    updateBalance.innerText =totalUpdateBalance;
  }
}


// get deposit button ////////////
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInputValue=getInputValue ('deposit-input');
   if(depositInputValue>0){
    getTotalInputValue(depositInputValue, 'deposit-total');
    getUpdateBalance(depositInputValue, true);
   }
})

// get withdraw button ////////////
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputValue=getInputValue ('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInputValue<currentBalance && withdrawInputValue>0){
        getTotalInputValue(withdrawInputValue, 'withdraw-total');
        getUpdateBalance(withdrawInputValue, false);
    }
    if(withdrawInputValue>currentBalance){
        console.log('sorry you have not enough balance')
    }

})
