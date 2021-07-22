     //Buttons for Recharge Cards and Electricity
     const amountButtons = document.querySelectorAll('.btn-amount');
     const allAmountButtons = Array.from(amountButtons)

     allAmountButtons.forEach(btn => {

        btn.addEventListener('click', ()=>{
            const rechargeValue = btn.dataset.amount;
            const rechargeInput = document.getElementById('recharge-input');
            rechargeInput.setAttribute('value', rechargeValue);

        });
     });


    


     
 