function addCellToBoard(rowDiv) {
    let newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.id = `${i}-${j}`;
            newCell.addEventListener('mouseenter', () => {newCell.classList.add('hovered')});
            rowDiv.appendChild(newCell);
}

function buildBoard(boardSize) {
    const cellNumberInput = document.getElementById('cell-number-input');
    let numCells = cellNumberInput.value;
    let cellSize = Math.floor(boardSize / numCells);
    let columnWidths = '';
    for(i=0; i < numCells; i++){
        columnWidths += (cellSize + 'px ');
    }
    let cellContainer = document.querySelector('.cellContainer')
    cellContainer.style.cssText = 'grid-template-columns: ' + columnWidths + ';';
    document.documentElement.style.setProperty('--cell-size', (cellSize - 2) + 'px');
    document.documentElement.style.setProperty('--board-size', boardSize + 'px');

    for(i = 0; i < numCells; i++){
        let rowDiv = document.createElement('div');
        for(j = 0; j < numCells; j++){
            addCellToBoard(rowDiv);
        }
        cellContainer.appendChild(rowDiv);
    }
}


function resetView() {
    let cellContainer = document.querySelector('.cellContainer');
    let mainContainer = document.querySelector('.container');
    mainContainer.removeChild(cellContainer);

    let newCellContainer = document.createElement('div');
    newCellContainer.classList.add('cellContainer');
    mainContainer.appendChild(newCellContainer);

    buildBoard(boardSize);
}


function game() {
    boardSize = 1000;
    buildBoard(boardSize)
    resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetView);
}

game()

