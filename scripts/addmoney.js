document.getElementById('addMoneyToggle').addEventListener('click', function(event){
    
    event.preventDefault();

    const cashOutToggle = document.getElementById('cashoutSection');
    const addMoneySection = document.getElementById('addMoneySection');
    cashOutToggle.classList.add('hidden');
    addMoneySection.classList.remove('hidden');
    // console.log('addmoney clicked')

})

const btnAddMoney = document.getElementById('btn-addMoney');
btnAddMoney.addEventListener('click', function (event) {
    event.preventDefault();


    const accountNumber = document.getElementById('accountNumber').value;

    // Main balance
    const mainBalance = document.getElementById('mainBalance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(convertedMainBalance, typeof convertedMainBalance);

    // Amount Feild
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    // console.log(convertedAmount, typeof convertedAmount);

    // Pin number feild
    const pin = document.getElementById('accountPin').value;
    const convertedPin = parseInt(pin);
    // console.log(convertedPin, typeof convertedPin);

    

    // accessing element for appending items
    // const newInvalidAcc = document.getElementById('invalidAccount');
    const newInvalidAmount = document.getElementById('invalidAmount');
    const newInvalidPin = document.getElementById('invalidPin');

    if (accountNumber.length === 11) {
        if (convertedAmount) {
            if (convertedPin === 1234) {
                sum = convertedMainBalance + convertedAmount;
                // console.log(sum);
                document.getElementById('mainBalance').innerText = sum;
            }
            else {
                // alert('put a valid pin number')
                newInvalidPin.innerText = '*Invalid PIN';
                newInvalidPin.style.color = 'red'; // Make it red for better visibility
            }
        }
        else {
            // alert('put valid amount')
            newInvalidAmount.innerText = '*Invalid Amount ';
            newInvalidAmount.style.color = 'red'; // Make it red for better visibility
        }
    }
    else {
        // alert('put valid account number')const newInvalidAcc = document.createElement('p'); // Create a paragraph element
        newInvalidAcc.innerText = '*Invalid Account Number';
        newInvalidAcc.style.color = 'red'; // Make it red for better visibility
        // invalidAccount.appendChild(newInvalidAcc);
    }
})