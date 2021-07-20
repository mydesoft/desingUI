const dstvCustomerCheckBtn = document.getElementById('dstv-check-btn');

const dstvCustomerCheckForm = document.getElementById('dstv-check-form');

 const showDSTVCustomerCheckTable = (event) => {

 	event.preventDefault();

 	$response = 'OK';

	const customerCheckTable = document.getElementById('dstv-check-table');

	const dstvRechargeButton = document.getElementById('dstv-recharge-btn');

	if($response === 'OK'){

		tableElement = document.createElement('table');
		tableElement.className = 'table table-bordered table-striped table-hover';
		tableElement.innerHTML = `
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expiry Date</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Charles Samuel</td>
                        <td>29th, July 2021</td>
                        </tr>
                    </tbody>
		`;
		customerCheckTable.append(tableElement);
		dstvCustomerCheckBtn.setAttribute('disabled', true);
		dstvRechargeButton.removeAttribute('disabled');
	}

	else{
		alert('Error Validating your Inputs!, Please Confirm your Entries.');

	}
 }




dstvCustomerCheckForm.addEventListener('submit', showDSTVCustomerCheckTable);



