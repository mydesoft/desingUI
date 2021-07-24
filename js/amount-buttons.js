 //  Amount Buttons for Electricity and Recharge 

    const input =  document.getElementById("recharge-input")
    const buttons =  document.querySelectorAll('.btn-amount')

    const allButtons = Array.from(buttons)

     allButtons.forEach( button => {
        button.addEventListener("click", () => {
        input.setAttribute("value", button.dataset.amount)
        input.value = button.dataset.amount
      })
     })

      input.addEventListener("keyup", (evt) => {
        input.setAttribute("value", evt.target.value)
        input.value = evt.target.value
    })
