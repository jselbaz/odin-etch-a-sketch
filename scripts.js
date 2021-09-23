const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('.size-slider');
const colorBtn = document.querySelector('.colorBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const clearBtn = document.querySelector('.clearBtn');
const adjustGridSize = document.querySelector('.apply');
let size = 16;
let erase = false;
let currentColor = '#DCDCDC';
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

colorBtn.addEventListener('click', function() {
  erase = false;
})

eraseBtn.addEventListener('click', function() {
  erase = true;
})

grid.addEventListener('mouseover', function(e) {
  if (e.target.matches('.cell') && erase === false) {
    e.target.classList.remove('erased');
    e.target.classList.add('active');
  }
})

grid.addEventListener('mouseover', function(e) {
  if (e.target.matches('.cell') && erase === true) {
    e.target.classList.remove('active');
    e.target.classList.add('erased');
  }
})

gridSize.addEventListener('input', function(e) {
  size = e.target.value;
  gridValue.textContent = `${size}x${size}`;
})

adjustGridSize.addEventListener('click', function() {
  changeSize();
})

adjustGridSize.addEventListener('click', changeSize);

clearBtn.addEventListener('click', function() {
  changeSize(size);
})

/*
Potential future changes to change coloring mode color
let colorPicker = document.querySelector('.colorPicker');

function setCurrentColor(color) {
  currentColor = color;
}

colorPicker.onchange = (e) => setCurrentColor(e.target.value)
*/