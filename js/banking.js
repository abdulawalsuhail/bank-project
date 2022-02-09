

//  handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newdespositAmountText = depositInput.value;
    const newdespositAmount = parseFloat(newdespositAmountText);

    // update deposit totle 
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newdespositAmount;
    depositTotal.innerText = newDepositTotal;




    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotleText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(balanceTotleText);
    const newBalanceTotal = previousBalancetotal + newdespositAmount;
    balanceTotal.innerText = newBalanceTotal;



    // clear the deposit input field
    depositInput.value= '';
});

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);



    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalancetotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalancetotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;



    // clear the withdraw input field 
    withdrawInput.value = '';

})