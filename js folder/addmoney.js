document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = getValueById('input-add-money');
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = getValueById('input-pin');
    
    if (pinNumber === '2345') {
        const balance = getInnerTextById('available-balance');

        const newBalance = addMoneyNumber + balance;
        document.getElementById('available-balance').innerText = newBalance;
    }
    else {
        alert('Failed to added money');
    }
})