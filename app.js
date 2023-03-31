// Variables globales
let money = 0;
let interestRate = 0;
let loans = 0;
let debt = 0;
let passiveIncome = 0;
let investmentBonus = 0;
let investmentUpgrades = 0;

// Funciones
function earnMoney() {
	money += 1;
	updateStats();
}

function invest() {
	if (money > 0) {
		const investmentAmount = Math.floor(money / 10);
		money -= investmentAmount;
		passiveIncome += investmentAmount * (interestRate + investmentBonus);
		updateStats();
	}
}

function takeLoan() {
	const loanAmount = Math.floor(money / 2);
	loans += 1;
	debt += loanAmount;
	money += loanAmount;
	updateStats();
}

function payLoan() {
	if (debt > 0 && money >= debt) {
		money -= debt;
		debt = 0;
		loans -= 1;
		updateStats();
	}
}

function upgradeInvestment() {
	if (money >= 100) {
		money -= 100;
		investmentBonus += 0.1;
		investmentUpgrades += 1;
		updateStats();
	}
}

function updatePassiveIncome() {
	passiveIncome = 0;
	for (let i = 0; i < investmentUpgrades; i++) {
		passiveIncome += Math.floor(money / 10) * (interestRate + investmentBonus);
	}
	updateStats();
}

function updateStats() {
	document.getElementById('money').textContent = money;
	document.getElementById('interest-rate').textContent = interestRate + investmentBonus + '%';
	document.getElementById('loans').textContent = loans;
	document.getElementById('debt').textContent = '$' + debt;
	document.getElementById('passive-income').textContent = '$' + passiveIncome + '/s';
	document.getElementById('investment-bonus').textContent = investmentBonus * 100 + '%';
	document.getElementById('investment-upgrades').textContent = investmentUpgrades;
}

// Eventos
document.getElementById('earn-money').addEventListener('click', earnMoney);
document.getElementById('invest').addEventListener('click', invest);
document.getElementById('take-loan').addEventListener('click', takeLoan);
document.getElementById('pay-loan').addEventListener('click', payLoan);
document.getElementById('upgrade-investment').addEventListener('click', upgradeInvestment);

// Loop principal del juego
setInterval(function() {
	money += passiveIncome;
	updateStats();
}, 1000);

// Loop para actualizar ingresos pasivos cada 5 segundos
setInterval(function() {
	updatePassiveIncome();
}, 5000);
