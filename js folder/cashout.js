document.getElementById('cash-out').addEventListener('click', function(event){
event.preventDefault();
    const cashoutAmount = getValueById('cashout-amount');
    const cashoutAmountNumber = parseFloat(cashoutAmount);

    const cashoutPin = getValueById('cashout-pin');
    const availableBalance = getInnerTextById('available-balance');
    const availableBalanceNumber = parseFloat(availableBalance);

    if(cashoutPin === '2345'){
        const newBalance = availableBalanceNumber - cashoutAmountNumber;

        document.getElementById('available-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out');
    }
})