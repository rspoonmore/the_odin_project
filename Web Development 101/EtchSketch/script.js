let numCells = 3;
let cellSize = 50;
let columnWidths = '';
let rowHeights = '';
for(i=0; i < numCells; i++){
    columnWidths += (cellSize + 'px ')
    rowHeights += (numCells * cellSize + 'px ')
}
let cellContainer = document.querySelector('.cellContainer')
cellContainer.style.cssText = 'grid-template-columns: ' + columnWidths + '; grid-template-rows: ' + rowHeights + ';';
console.log(rowHeights);
for(i = 0; i < numCells; i++){
    let rowDiv = document.createElement('div');
    //rowDiv.style.display = 'inline';
    for(j = 0; j < numCells; j++){
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.id = `${i}-${j}`
        rowDiv.appendChild(newCell);
    }
    cellContainer.appendChild(rowDiv);
}