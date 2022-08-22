const playerArrary = [];

function displayPlayerName(players) {
    const selectedV = document.getElementById('selected-v');
    selectedV.innerText = '';

    for (let i = 0; i < playerArrary.length; i++) {
        const name = playerArrary[i].playerName;

        const lengthCount = playerArrary.length;
        // console.log(lengthCount * 1000)

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