const gotvCustomerCheckBtn = document.getElementById('gotv-check-btn');

const gotvCustomerCheckForm = document.getElementById('gotv-check-form');


const showGOTVCustomerCheckTable = (event) => {

	event.preventDefault();

	$response = 'error';

	const customerCheckTable = document.getElementById('gotv-check-table');

	const gotvRechargeButton = document.getElementById('gotv-recharge-btn');

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
		gotvCustomerCheckBtn.setAttribute('disabled', true);
		gotvRechargeButton.removeAttribute('disabled');
	}

	else{
		alert('Error Validating your Inputs!, Please Confirm your Entries.');

	}
}


gotvCustomerCheckForm.addEventListener('submit', showGOTVCustomerCheckTable);



