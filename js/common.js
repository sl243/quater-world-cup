const playerArrary = [];


function displayPlayerName(players) {
    const selectedV = document.getElementById('selected-v');
    selectedV.innerText = '';

    for (let i = 0; i < playerArrary.length; i++) {
        const name = playerArrary[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${name}</td>
        `
        selectedV.appendChild(tr);
    }

}

function addPlayer(player) {

    if (playerArrary.length >= 5) {
        playerArrary.length = 5;
        alert('Do not add more player');
        return;
    }

    const playerName = player.parentNode.children[0].innerText;

    const playerNameObj = {
        playerName: playerName
    }

    playerArrary.push(playerNameObj);

    document.getElementById('total-player').innerText = playerArrary.length;

    displayPlayerName(playerArrary);

    player.disabled = true;
}

function getExpenseValueById(elementId) {
    const expensesValue = document.getElementById(elementId);
    const expensesValueString = expensesValue.value;
    const expenses = parseInt(expensesValueString);

    expensesValue.value = '';

    if (isNaN(expenses)) {
        alert('Please Provide Valid Amount');
        return;
    }

    return expenses;
}

document.getElementById('per-player-cost').addEventListener('click', function () {

    const playerCostInput = getExpenseValueById('player-cost-input');

    const playerCost = playerCostInput * playerArrary.length;

    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    const totalExpensesString = totalPlayerExpenses.innerText;
    const totalExpenses = parseFloat(totalExpensesString);

    const total = totalExpenses + playerCost;

    totalPlayerExpenses.innerText = total;

})

document.getElementById('calculate-total-cost').addEventListener('click', function () {
    const managerInput = getExpenseValueById('manager-input');
    const coachInput = getExpenseValueById('coach-input');

    const managerCoachExpense = managerInput + coachInput;

    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    const totalExpensesString = totalPlayerExpenses.innerText;
    const totalExpensesx = parseFloat(totalExpensesString);

    const totalAmount = totalExpensesx + managerCoachExpense;

    const calculateTotalExpense = document.getElementById('calculate-total-Expense');
    const calculateTotalExpenseString = calculateTotalExpense.innerText;
    const calculateTotal = parseFloat(calculateTotalExpenseString);

    const totalExpenses = totalAmount + calculateTotal;

    calculateTotalExpense.innerText = totalExpenses;

})