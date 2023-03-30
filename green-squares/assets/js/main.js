// WARNING, this script doesn't work for a grid size beyond 9x9, due to the instructions used to find the ID.
// I'll address this issue later.

const minSize = 3;
const maxSize = 9;
let isGridGenerated = false;
let score = 0;
let size
handleScoreChange()

// function used to display the score. the value is incremented each time a cell is clicked and set to 0
// when a grid is generated
function handleScoreChange() {
  document.getElementById("js-display-score").innerHTML = score;
}


// create the buttons for the grid size choice, ranging from minSize to maxSize
for (let i = minSize; i <= maxSize; i++) {
  const btn = document.createElement('button');
  btn.innerText = i.toString() + 'x' + i.toString();
  btn.id = 'js-grid-' + i.toString();
  document.getElementById('js-select-size').appendChild(btn);
  document.getElementById('js-grid-' + i).setAttribute('onclick', 'generateGrid(' + i.toString() + ')');
}


// function used to generate the grid, based on the clicked button
// each cell gets an id which is generated in a systemic way (row-i-column-j).
// each cell is then assigned one attribute which is randomly between chosen two,
// depending on the odd/even nature of an int. This attribute will be used to change the cell color.
function generateGrid(id) {

  size = id;
  score = 0;
  handleScoreChange();
  document.getElementById('js-message').innerText = "";
  document.getElementById('js-table').innerHTML = "";
  document.getElementById('js-grid-size').innerHTML = "";


  const table = document.createElement('table');
  table.setAttribute('id', 'js-generate-grid');
  document.getElementById('js-table').insertAdjacentElement('beforeend', table);

  for (let i = 1; i <= id; i++) {
    const row = document.createElement('tr');
    row.setAttribute('id', 'row-' + i.toString());
    document.getElementById("js-generate-grid").insertAdjacentElement('beforeend', row);
    for (let j = 1; j <= id; j++) {
      const column = document.createElement('td')
      // column.innerText = "case" + i.toString() + j.toString();
      column.setAttribute('id', 'row-' + i.toString() + '-column-' + j.toString());
      document.getElementById('row-' + i.toString()).insertAdjacentElement('beforeend', column);
    }
  }

  for (let i = 1; i <= id; i++) {
    for (let j = 1; j <= id; j++) {
      let rand = parseInt(Math.random() * 10);
      if (rand % 2 === 0) {
        document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('class', 'app-green');
      } else {
        document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('class', 'app-red');
      }
      document.getElementById('row-' + i.toString() + '-column-' + j.toString()).setAttribute('onclick', 'handleClick(this)');
    }
  }
  score = 0;
  document.getElementById('js-grid-size').insertAdjacentText("beforeend", ' (' + id + 'x' + id + ')');

}


// function used to switch the attribute that affects the color of a cell, based on the ID and its actual state.
function switchCellState(cellState, cellID) {

  if (cellState === 'app-green') {
    document.getElementById(cellID).className = 'app-red';
  } else if (cellState === 'app-red') {
    document.getElementById(cellID).className = 'app-green';
  }
}

// function that triggers the switchCellState on the clicked cell and adjacent ones (based on the clicked cell ID)
function handleClick(element) {

  score++;
  handleScoreChange();

  let clickedCellState = element.getAttribute('class');
  let clickedCellID = element.getAttribute('id');
  switchCellState(clickedCellState, clickedCellID);

  // Variables used to "store" the coordinates of the clicked cell to target the adjacent ones hereafter
  let clickedRow = parseInt(clickedCellID.charAt(4));
  let clickedColumn = parseInt(clickedCellID.charAt(13));

  // console.log(clickedCellID);
  // console.log(clickedRow);
  // console.log(clickedColumn);
  // console.log(element);

  // I know there are some duplicate instructions and the parameters are hideously long. Will address this issue and refactor later.
  // It was easier/faster for me to handle each individual scenario rather than finding the mathematical model.
  if (clickedRow === 1) {
    if (clickedColumn === 1) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
    } else if (clickedColumn === size) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
    } else {
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
    }
  }

  if (clickedRow === size) {
    if (clickedColumn === 1) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
    } else if (clickedColumn === size) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
    } else {
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
    }
  }

  if (clickedRow > 1 && clickedRow < size) {
    if (clickedColumn === 1) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
    } else if (clickedColumn === size) {
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
    } else {
      switchCellState(
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow - 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).className),
        (document.getElementById('row-' + (clickedRow + 1).toString() + '-column-' + (clickedColumn).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn - 1).toString()).getAttribute("id"))
      )
      switchCellState(
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).className),
        (document.getElementById('row-' + (clickedRow).toString() + '-column-' + (clickedColumn + 1).toString()).getAttribute("id"))
      )
    }
  }

  isWon();
}

// function used to check if the player won (aka all the cells are green).
// each time the player clicks a cell, the counter is set to 0 and incremented for each green cell.
// if the counter is equal to the grid size (aka all the cells are green/counted), he wins.
function isWon() {
  let count = 0;
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (document.getElementById('row-' + i.toString() + '-column-' + j.toString()).className === 'app-green') {
        count++;
      }
    }
  }
  if (count === size * size) {
    document.getElementById('js-message').innerText = ' VICTOIRE !! Tentez votre chance avec une grille supérieure.';

  }
}