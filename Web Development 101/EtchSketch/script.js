let numCells = 100;
boardSize = 1000;

function addCellToBoard(rowDiv) {
    let newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.id = `${i}-${j}`;
            newCell.addEventListener('mouseenter', () => {newCell.classList.add('hovered')});
            rowDiv.appendChild(newCell);
}

function buildBoard(numCells, boardSize) {
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
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.remove('hovered');
    });
}


function game() {
    buildBoard(numCells, boardSize)
    resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetView);
}

game()

