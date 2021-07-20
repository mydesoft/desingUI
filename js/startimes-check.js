const startimesCustomerCheckBtn = document.getElementById('startimes-check-btn');

const startimesCustomerCheckForm = document.getElementById('startimes-check-form');


 const showSTARTIMESCustomerCheckTable = (event) => {

 	event.preventDefault();
 	
 	$response = 'OK';

	const customerCheckTable = document.getElementById('startimes-check-table');

	const startimesRechargeButton = document.getElementById('startimes-recharge-btn');

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
		startimesCustomerCheckBtn.setAttribute('disabled', true);
		startimesRechargeButton.removeAttribute('disabled');
	}

	else{
		alert('Error Validating your Inputs!, Please Confirm your Entries.');

	}
 }


startimesCustomerCheckForm.addEventListener('submit', showSTARTIMESCustomerCheckTable);


