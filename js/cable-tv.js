const customerCheckBtn = document.getElementById('check-btn')
const form = document.getElementById('form-check')

form.addEventListener('submit', (event)=>{
	
	customerCheckBtn.disabled = true
	customerCheckBtn.innerText = 'Processing...'

});



