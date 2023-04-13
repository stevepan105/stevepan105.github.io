const calculatorForm = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

calculatorForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const country = document.getElementById('country').value;
	const degree = document.querySelector('input[name="degree"]:checked').value;
	const consumption = document.querySelector('input[name="consumption"]:checked').value;
	let cost = 0;
	if (country === '美国') {
		if (degree === '本科') {
			if (consumption === '高') {
				cost = 300000;
			} else if (consumption === '中') {
				cost = 250000;
			} else {
				cost = 200000;
			}
		} else if (degree === '硕士') {
			if (consumption === '高') {
				cost = 400000;
			} else if (consumption === '中') {
				cost = 350000;
			} else {
				cost = 300000;
			}
		} else {
			if (consumption === '高') {
				cost = 500000;
			} else if (consumption === '中') {
				cost = 450000;
			} else {
				cost = 400000;
			}
		}
	} else if (country === '英国') {
		if (degree === '本科') {
			if (consumption === '高') {
				cost = 250000;
			} else if (consumption === '中') {
				cost = 200000;
			} else {
				cost = 150000;
			}
		} else if (degree === '硕士') {
			if (consumption === '高') {
				cost = 350000;
			} else if (consumption === '中') {
				cost = 300000;
			} else {
				cost = 250000;
			}
		} else {
			if (consumption === '高') {
				cost = 450000;
			} else if (consumption === '中') {
				cost = 400000;
			} else {
				cost = 350000;
			}
		}
	} else if (country === '澳大利亚') {
		if (degree === '本科') {
			if (consumption === '高') {
				cost = 200000;
			} else if (consumption === '中') {
				cost = 150000;
			} else {
				cost = 100000;
			}
		} else if (degree === '硕士') {
			if (consumption === '高') {
				cost = 300000;
			} else if (consumption === '中') {
				cost = 250000;
			} else {
				cost = 200000;
			}
		} else {
			if (consumption === '高') {
				cost = 400000;
			} else if (consumption === '中') {
				cost = 350000;
			} else {
				cost = 300000;
			}
		}
	} else {
		if (degree === '本科') {
			if (consumption === '高') {
				cost = 250000;
			} else if (consumption === '中') {
				cost = 200000;
			} else {
				cost = 150000;
			}
		} else if (degree === '硕士') {
			if (consumption === '高') {
				cost = 350000;
			} else if (consumption === '中') {
				cost = 300000;
			} else {
				cost = 250000;
			}
		} else {
			if (consumption === '高') {
				cost = 450000;
			} else if (consumption === '中') {
				cost = 400000;
			} else {
				cost = 350000;
			}
		}
	}
	resultDiv.innerText = `留学${country}${degree}的费用大约为${cost}元人民币。`;
});
