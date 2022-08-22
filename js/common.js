const playerArrary = [];


function displayPlayerName(players) {

    const selectedV = document.getElementById('selected-v');
    selectedV.innerText = '';

    for (let i = 0; i < playerArrary.length; i++) {
        const name = playerArrary[i].playerName;

        if (playerArrary.length === 5) {
            alert('Do not Add More Player')
        }


        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${name}</td>
        `
        selectedV.appendChild(tr);
    }

}

function addPlayer(player) {

    const playerName = player.parentNode.children[0].innerText;

    const playerNameObj = {
        playerName: playerName
    }

    playerArrary.push(playerNameObj);

    displayPlayerName(playerArrary);
}

const perPlayerCost = document.getElementById('per-player-cost').addEventListener('click', function () {
    const playerCostInput = document.getElementById('player-cost-input');
    const playerCostAmountString = playerCostInput.value;
    const playerCostAmount = parseFloat(playerCostAmountString);
    playerCostInput.value = '';

    // console.log(playerCostAmount);

    totalCost = playerCostAmount * playerArrary.length;

    console.log(totalCost)
})