const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const clearBtn = document.querySelector('.clearBtn');
const adjustGridSize = document.querySelector('.apply');
let size = 16;

makeGrid(size);

function makeCell(size) {
  const div = document.createElement('div');
  div.classList.add('cell');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}

function makeGrid(gridSize) {
  for (let i=0; i<gridSize; i++) {
    for (let j=0; j<gridSize; j++) {
      grid.appendChild(makeCell(grid.clientWidth / gridSize));
    }
  }
}

function changeSize() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  makeGrid(size);
}

grid.addEventListener('mouseover', function(e) {
  if (e.target.matches('.cell')) {
    e.target.classList.add('active');
  }
});

gridSize.addEventListener('input', function(e) {
  size = e.target.value;
  gridValue.textContent = `${size}x${size}`;
});

adjustGridSize.addEventListener('click', function() {
  changeSize();
});

adjustGridSize.addEventListener('click', changeSize);